Feature('e2e features');

Scenario('E2E UI test of Doa Kozmetik like a guest customer',  ({ I }) => {
I.amOnPage('https://www.doakozmetik.com');
I.moveCursorTo('//a[@href="https://www.doakozmetik.com/cilt"]'); //choose the category "skin"
I.wait(3);
I.moveCursorTo('//a[@href="https://www.doakozmetik.com/cilt/cilt-bakim-serumlari"]'); //choose the sub-category "skin care serums"
I.wait('3');
I.click('//a[@href="https://www.doakozmetik.com/cilt/cilt-bakim-serumlari"]');

//choose a product
I.waitForElement('//img[contains(@alt,"L-Ascorbic Acid Serum")][@data-src="https://www.doakozmetik.com/media/cache/images/products/basliksiz-7-350x400.jpg"]', 60);
I.scrollIntoView('//img[contains(@alt,"L-Ascorbic Acid Serum")][@data-src="https://www.doakozmetik.com/media/cache/images/products/basliksiz-7-350x400.jpg"]', 60);
I.moveCursorTo('//button[@onclick="Cart.addTo(119, 0)"]'); 
I.forceClick('//button[@onclick="Cart.addTo(119, 0)"]'); //add to basket
I.waitForElement('//a[@href="/cart/checkout"]', 60);
I.forceClick('//a[@href="/cart/checkout"]'); //go to the basket
I.waitForElement('//h1[contains(text(),"Ödeme Yap")]', 60); //click to pay
I.click('//a[contains(text(),"Misafir Olarak Devam Et")]'); //choose to continue as a guest, not as a registered user
I.waitForElement('//h2[contains(text(),"Fatura Bilgileri")]'); //see the payment information form
I.seeElement('//h2[contains(text(),"Fatura Bilgileri")]');
});
