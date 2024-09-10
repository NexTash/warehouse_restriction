frappe.ui.form.on("Stock Reconciliation", {
    setup:function(frm) {
        setTimeout(() => {
            frm.set_query("set_warehouse", () => {
                return {
                    query: "warehouse_restriction.events.stock_reconciliation.stock_reconciliation_set_warehouse",
                    filters: {
                        company: frm.doc.company,
                        group: 0
                    }
                };
            });
        
            frm.set_query('warehouse', 'items', () => {
                return {
                    query: "warehouse_restriction.events.stock_reconciliation.stock_reconciliation_set_warehouse",
                    filters: {
                        company: frm.doc.company
                    }
                }
            })
        },1000)
    },
    set_warehouse: function(frm) {
        if (frm.doc.set_warehouse) {
            console.log(frm.doc.set_warehouse, frappe.session.user+"-Stock Reconciliation");
            
            frappe.db.exists('Warehouse Restriction',frappe.session.user+"-Stock Reconciliation")
            .then(exists => {
                console.log(exists);
                
                if(exists){
                    frappe.db.get_doc('Warehouse Restriction', null, { 'user': frappe.session.user,'document_name':"Stock Reconciliation"})
                    .then(doc => {    
                        let w_exist = 0
                        for(let i of doc.warehouses){
                            if(i.warehouse == frm.doc.set_warehouse){
                                w_exist += 1
                            }
                            if( w_exist == 0 ){
                                frappe.msgprint(__('You are not assignend to the selected warehouse {0}.', [frm.doc.set_warehouse]));
                                frappe.model.set_value("Stock Reconciliation",frm.doc.name,"set_warehouse","")
                            }
                        }
                    })
                }
            })
        }
    },
});