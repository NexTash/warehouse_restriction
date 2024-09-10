frappe.ui.form.on("Purchase Invoice", {
   
});
frappe.ui.form.on("Purchase Invoice Item", {
    custom_mark_up: function (frm, cdt, cdn) {
    
       let child_func = markup(frm,cdt,cdn);
       frappe.db.get_value('Item Price', {item_code: child_func.item_code, price_list: "Standard Selling"}, 'price_list_rate')
            .then(r => {
                let values = r.message;
                var prev_selling_rate = values.price_list_rate
                var new_markup = ((child_func.rprice - prev_selling_rate)/prev_selling_rate)*100
       if(child_func.rprice > prev_selling_rate){ 
        frappe.confirm(
            'Existing “Standard Selling Price” has Increased from ' + frm.doc.currency + (prev_selling_rate).toFixed(2) + ' to ' + frm.doc.currency + child_func.rprice.toFixed(2) + ' Percentage Increment is ' + new_markup.toFixed(2) + '%',
            function(){
                var item_code = child_func.item_code
                var rprice = child_func.custom_rprice

                frappe.call({
                    method: 'warehouse_restriction.events.purchase_invoice.update_rate',
                    args: {
                        item_code, rprice
                    },
                })
            },
            function(){
               
                frappe.msgprint('Rate Does Not Change');
            }
        );
       }
       else{ 
        frappe.confirm(
            'Existing “Standard Selling Price” has Reduced from ' + frm.doc.currency + prev_selling_rate.toFixed(2) + ' to ' + frm.doc.currency + child_func.rprice.toFixed(2) + ' Percentage Reduction is ' + (-new_markup.toFixed(2)) + '%',
            function(){
                var item_code = child_func.item_code
                var rprice = child_func.custom_rprice

                frappe.call({
                    method: 'warehouse_restriction.events.purchase_invoice.update_rate',
                    args: {
                        item_code, rprice
                    },
                })
            },
            function(){
               
                frappe.msgprint('Rate Does Not Change');
            }
        );
       }
    })
    },
    rate: function (frm, cdt, cdn) {
        markup(frm,cdt,cdn);
    },
    custom_rprice: function(frm,cdt,cdn){
        var child=locals[cdt][cdn]
        frappe.model.set_value(cdt,cdn,"custom_price_rate_list",child.custom_rprice)
        
        
        var changed_markup = (child.custom_rprice/ child.rate) * 100 - 100
        if(child.custom_mark_up != changed_markup){
            frappe.model.set_value(cdt,cdn,"custom_mark_up",changed_markup)
        }
        // var value = markup(frm, cdt, cdn)
        // console.log(value);
        // console.log(child.custom_rprice);
        var markup = (child.custom_mark_up/100)
        var rate = markup*child.rate
        var rprice = child.rate+rate
        if(rprice != child.custom_rprice){
            frappe.msgprint("Markup Price is added manually")   
        }
    },
});

 function markup(frm,cdt,cdn){
    var child = locals[cdt][cdn];
    if(child.custom_mark_up){
        var markup = (child.custom_mark_up/100)
        var rate = markup*child.rate
        var rprice = child.rate+rate
        frappe.model.set_value(cdt,cdn,"custom_rprice",rprice)
        }
    return {'item_code': child.item_code, 'custom_rprice': child.custom_rprice, 'rprice' : rprice, 'markup' : child.custom_mark_up, 'rate' : child.rate}
 }