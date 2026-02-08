Feature('login');

Scenario('login with a wrong username/email without password', async ({ I }) => {
await I.amOnPage('https://www.letgo.com/');
await I.waitForElement('//span[@id="cmpbntnotxt"]', 60);

await I.click('//span[@id="cmpbntnotxt"]');
await I.waitForInvisible('//span[@id="cmpbntnotxt"]', 20);


await I.waitForElement('//img[@class="marketing-popup-modal-image"]', 60);
await I.click('//*[@class="marketing-popup-modal-close-btn"]');
await I.waitForInvisible('.marketing-popup-modal', 20);


if (I.grabNumberOfVisibleElements('//span[@id="cmpbntnotxt"]') > 0)
{
    await I.click('//span[@id="cmpbntnotxt"]');
    await I.waitForInvisible('#cmpbox', 10);
}

await I.waitForElement("//*[contains(text(),'Giriş')]", 60);
await I.forceClick('//*[contains(text(),"Giriş")]');

await I.waitForElement('//*[contains(text(),"Giriş Yap")]', 60);
await I.scrollTo('div.headerRight');
await I.click('//*[contains(text(),"Giriş Yap")]');

await I.waitForElement('//*[contains(text(),"E-posta adresiyle devam et")]', 60);
await I.click('//*[contains(text(),"E-posta adresiyle devam et")]');


});
