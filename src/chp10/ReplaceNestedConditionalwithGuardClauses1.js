export function payAmount(employee) {
    let result;
    if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
    
    if (employee.isRetired) {
        result = {amount: 0, reasonCode: "RET"};
    } else {
        // give a dumb logic to compute amount
        // lorem.ipsum(dolor.sitAmet);
        // consectetur(adipiscing).elit();
        // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
        // ut.enim.ad(minim.veniam);
        result = someFinalComputation();
    }
    return result;
}

function someFinalComputation() {
    return {amount: 999, reasonCode: "UNICORN"};
}
