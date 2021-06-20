getCompoundInterest: This function is used to calculate the compound interest. This function is pure as it does not require to acess state variables.
reqLoan: This is for the creditor to calculate the final amount to be paid to the owner using getCompoundInterest function and issues the amount of loan of the creditor in the loans mapping. After that it emits the request after adding the load on the mapping.

viewDues: This is for the owner to view the pending amount of loan which needs to be settled. We type the creditor’s address and it returns the pending amount. Since it is a view-only method, it doesn’t cause any state changes.

settleDues: This is a ‘owner-only-accesible’ method too, but might lead to state changes. It takes the creditor’s address, and if the loan is settled, it marks the dues as zero and returns true. It will return false if the dues remain unsettled.
