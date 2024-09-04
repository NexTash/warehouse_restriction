frappe.ui.form.on("Stock Reconciliation", {
    setup:function(frm) {
        setTimeout(() => {
            frm.set_query("set_warehouse", () => {
                return {
                    query: "warehouse_restriction.events.stock_reconciliation.stock_reconciliation_set_warehouse",
                    filters: {
                        Company: frm.doc.company,
                        Group: 0
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
    set_warehouse: function (frm) {
		// let transaction_controller = new erpnext.TransactionController({ frm: frm });
		// transaction_controller.autofill_warehouse(frm.doc.items, "warehouse", frm.doc.set_warehouse);
	},
})