frappe.ui.form.on("Material Request", {
    onload: function(frm) {
        frm.set_query("set_warehouse", () => {
            return {
                query: "warehouse_restriction.events.material_request.set_warehouse",
                filters: {
                    company: frm.doc.company
                }
            };
        });

        frm.set_query('warehouse', 'items', () => {
            return {
                query: "warehouse_restriction.events.material_request.set_warehouse",
                filters: {
                    company: frm.doc.company
                }
            };
        });
    },

    set_warehouse: function(frm) {
        if (frm.doc.set_warehouse) {
            console.log(frm.doc.set_warehouse, frappe.session.user+"-Material Request");
            
            frappe.db.exists('Warehouse Restriction',frappe.session.user+"-Material Request")
            .then(exists => {
                console.log(exists);
                
                if(exists){
                    frappe.db.get_doc('Warehouse Restriction', null, { 'user': frappe.session.user,'document_name':"Material Request"})
                    .then(doc => {    
                        let w_exist = 0
                        for(let i of doc.warehouses){
                            if(i.warehouse == frm.doc.set_warehouse){
                                w_exist += 1
                            }
                            if( w_exist == 0 ){
                                frappe.msgprint(__('You are not assignend to the selected warehouse {0}.', [frm.doc.set_warehouse]));
                                frappe.model.set_value("Material Request",frm.doc.name,"set_warehouse","")
                            }
                        }
                    })
                }
            })
        }
    },
});
