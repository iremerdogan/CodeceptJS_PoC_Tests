Feature('login');

Scenario('login with a wrong username/email without password @letgoLogin', ({ I }) => {

//first, this script rejects the cookies
I.amOnPage('https://www.letgo.com/');
I.waitForElement('//span[@id="cmpbntnotxt"]', 60);
I.click('//span[@id="cmpbntnotxt"]');
I.waitForInvisible('//span[@id="cmpbntnotxt"]', 20);

//then, it closes the pop-up image
I.waitForElement('//img[@class="marketing-popup-modal-image"]', 60);
I.click('//*[@class="marketing-popup-modal-close-btn"]');
I.waitForInvisible('.marketing-popup-modal', 20);

//in case popup, cookie and webpage layers are intermingled
if (I.grabNumberOfVisibleElements('//span[@id="cmpbntnotxt"]') > 0)
{
    I.click('//span[@id="cmpbntnotxt"]');
    I.waitForInvisible('#cmpbox', 10);
}

//clicks the "log in" button
I.waitForElement("//*[contains(text(),'Giriş')]", 60);
I.forceClick('//*[contains(text(),"Giriş")]');

//clicks the other "log in" button
I.waitForElement('//*[contains(text(),"Giriş Yap")]', 60);
I.scrollTo('div.headerRight');
I.click('//*[contains(text(),"Giriş Yap")]');

//clicks "continue with e-mail" button
I.waitForElement('//*[contains(text(),"E-posta adresiyle devam et")]', 60);
I.click('//*[contains(text(),"E-posta adresiyle devam et")]');

//enters the wrong e-mail and clicks "continue"
I.scrollIntoView('//input[@placeholder=" "]');
I.fillField('//input[@placeholder=" "]', 'example@gmail.com');
I.waitForElement('//span[contains(text(),"Devam Et")]');
I.click('//span[contains(text(),"Devam Et")]');
I.waitForElement('//span[contains(text(),"E-posta adresini gir")]', 60);
I.seeElement('//span[contains(text(),"E-posta adresini gir")]');
});






