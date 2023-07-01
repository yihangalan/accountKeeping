
export const transAccountNumber = (accountNumber) => {
    return parseInt(accountNumber.replace(/[$,]/g, ""));
}

