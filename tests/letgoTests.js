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





//this scenario tests if the filter works expectedly with some specific parameters

Feature('search')
Scenario('tests the search filter @letgoSearch1', async ({ I }) =>
{
    I.amOnPage('https://www.letgo.com');
    I.waitForElement('//span[@id="cmpbntnotxt"]', 60);
    I.click('//span[@id="cmpbntnotxt"]');
    I.waitForInvisible('//span[@id="cmpbntnotxt"]', 20);
    
    I.waitForElement('//img[@class="marketing-popup-modal-image"]', 60);
    I.click('//*[@class="marketing-popup-modal-close-btn"]');
    I.waitForInvisible('//*[@class="marketing-popup-modal-close-btn"]');

    //in case popup, cookie and webpage layers are intermingled
    if (I.grabNumberOfVisibleElements('//span[@id="cmpbntnotxt"]') > 0)
    {
        I.click('//span[@id="cmpbntnotxt"]');
        I.waitForInvisible('#cmpbox', 10);
    }
    //until here, the script rejects the cookies and closes the popup window


    //here, it clicks the search tab and enters the parameter "L koltuk"
    I.waitForElement('//input[@class="searchTb"]', 60);
    I.click('//input[@class="searchTb"]');
    I.fillField('//input[@class="searchTb"]', 'L koltuk');
    I.waitForElement('//a[@href="/koltuk_c15137"]', 60);
    I.click('//a[@href="/koltuk_c15137"]');


    //here, it sets "İstanbul" as the city and "Küçükçekmece" as the district parameter for filtering search results
    I.pressKey('Escape'); //for the "save search" pop up]',
    I.waitForElement('//span[text()="İl seçin"]', 20);
    I.pressKey('Escape');
    I.forceClick('//span[text()="İl seçin"]');
    I.waitForElement('//div[@class="dropdown-menu-item"][contains(text(),"İstanbul")]', 60);
    I.click('//div[@class="dropdown-menu-item"][contains(text(),"İstanbul")]');
    I.pressKey('Escape'); //because element <div class="dynamic-filter-actions"> obscures it
    I.forceClick('//span[text()="İlçe seçin"]');
    I.waitForElement('//div[@class="dropdown-menu-item"][contains(text(),"Küçükçekmece")]', 60);
    I.click('//div[@class="dropdown-menu-item"][contains(text(),"Küçükçekmece")]');
    I.wait(5);  //for the stability of the test


    //the script sets the price parameters for filtering search results.
    I.waitForElement('//span[text()="Min"]/following-sibling::input', 60);
    I.forceClick('//span[text()="Min"]/following-sibling::input');
    I.fillField('//span[text()="Min"]/following-sibling::input', '14999');
    I.waitForElement('//span[text()="Maks"]/following-sibling::input', 60);
    I.forceClick('//span[text()="Maks"]/following-sibling::input');
    I.fillField('//span[text()="Maks"]/following-sibling::input', '15001');
    I.waitForElement('//span[contains(text(),"Uygula")]');
    I.forceClick('//span[contains(text(),"Uygula")]');
    I.wait(5);


    //chooses one more parameter
    I.waitForElement('//label[@class="filter-collapse-checkbox-label text-body-s w-full cursor-pointer select-none peer-checked:font-semibold"][@for="durum_153308"]');
    I.forceClick('//label[@class="filter-collapse-checkbox-label text-body-s w-full cursor-pointer select-none peer-checked:font-semibold"][@for="durum_153308"]');
    I.forceClick('//span[contains(text(),"Uygula")]');
    I.wait(5);
    
    
    //compares if the amount of the last parameter and the search result match
    I.waitForElement('//label[contains(., "Yeni")]/span', 60);
    const rawText1 = await I.grabTextFrom('//label[contains(., "Yeni")]/span');
    const numberofSelectedFilter = parseInt(rawText1.replace(/\D/g, ''));
    console.log(numberofSelectedFilter);
    I.wait(5);
    I.waitForElement('//div[contains(text(),"İkinci El")]');
    const rawText2 = await I.grabTextFrom('//div[contains(text(),"İkinci El")]');
    const filteredResult = parseInt(rawText2.replace(/\D/g, ''));
    console.log(filteredResult);
    if (numberofSelectedFilter === filteredResult)
    {
        console.log('Test passed');
    }
    else
    {
        console.log('Test failed.');
    }
});