frappe.ui.form.on("Stock Entry", {
    setup:function(frm) {
        setTimeout(() => {
            frm.set_query("from_warehouse", () => {
                return {
                    query: "warehouse_restriction.events.stock_entry.stock_entry_set_warehouse",
                    filters: {
                        company: frm.doc.company,
                        group: 0
                    }
                };
            });
        
            frm.set_query('s_warehouse', 'items', () => {
                return {
                    query: "warehouse_restriction.events.stock_entry.stock_entry_set_warehouse",
                    filters: {
                        company: frm.doc.company
                    }
                }
            })
        },200)
    },

    from_warehouse: function(frm) {
        if (frm.doc.from_warehouse) {
            console.log(frm.doc.from_warehouse, frappe.session.user+"-Stock Entry");
            
            frappe.db.exists('Warehouse Restriction',frappe.session.user+"-Stock Entry")
            .then(exists => {
                console.log(exists);
                
                if(exists){
                    frappe.db.get_doc('Warehouse Restriction', null, { 'user': frappe.session.user,'document_name':"Stock Entry"})
                    .then(doc => {    
                        let w_exist = 0
                        for(let i of doc.warehouses){
                            if(i.warehouse == frm.doc.from_warehouse){
                                w_exist += 1
                            }
                            if( w_exist == 0 ){
                                frappe.msgprint(__('You are not assignend to the selected warehouse {0}.', [frm.doc.from_warehouse]));
                                frappe.model.set_value("Stock Entry",frm.doc.name,"from_warehouse","")
                            }
                        }
                    })
                }
            })
        }
    },
});

