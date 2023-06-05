const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Event listener for Yes button
yesButton.addEventListener('click', function () {
    // Redirect to your website
    window.location.href = 'https://www.google.com/search?q=jobs&sxsrf=APwXEdcr8LQu9d9oTT5H1qpRKFlGF2BVsw%3A1685903070639&source=hp&ei=3tZ8ZN7JJKqo5NoPof2coAQ&iflsig=AOEireoAAAAAZHzk7uUW_g9lSetXo6HP_AYk_LAXlnW5&ved=0ahUKEwjesJitnqr_AhUqFFkFHaE-B0QQ4dUDCAs&uact=5&oq=jobs&gs_lcp=Cgdnd3Mtd2l6EAMyDggAEIAEELEDEIMBEMkDMggIABCABBCSAzIICAAQigUQkgMyCAgAEIoFEJECMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyCwgAEIAEELEDEIMBOgcIIxCKBRAnOgQIIxAnOggILhCKBRCRAjoLCAAQigUQsQMQgwE6CwguEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQsQM6CwguEMcBENEDEIAEOgsILhCABBCxAxDUAjoFCC4QgARQAFj6BWCeF2gAcAB4AIABkgGIAZ4DkgEDMi4ymAEAoAEB&sclient=gws-wiz';
});

// Event listener for No button
noButton.addEventListener('click', function () {
    // Close the window
    window.close();
});

