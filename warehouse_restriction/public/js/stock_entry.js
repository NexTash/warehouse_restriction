frappe.ui.form.on("Stock Entry", {
    setup:function(frm) {
        setTimeout(() => {
            frm.set_query("from_warehouse", () => {
                return {
                    query: "warehouse_restriction.events.stock_entry.stock_entry_set_warehouse",
                    filters: {
                        Company: frm.doc.company,
                        Group: 0
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
})