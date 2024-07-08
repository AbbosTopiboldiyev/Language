const btns = document.querySelectorAll('.btn')

///  language title
const headerText1 = document.querySelector('.home_text1')
const headerText2 = document.querySelector('.home_text2')
const headerText3 = document.querySelector('.home_text3')
const headerText4 = document.querySelector('.home_text4')
const headerText5 = document.querySelector('.home_text5')
const headerText6 = document.querySelector('.home_text6')
const headerText7 = document.querySelector('.home_text7')
const headerText8 = document.querySelector('.home_text8')
const headerText9 = document.querySelector('.home_text9')
const headerText10 = document.querySelector('.home_text10')
const headerText11 = document.querySelector('.home_text11')
const headerText12 = document.querySelector('.home_text12')
const headerText13 = document.querySelector('.home_text13')
const headerText14 = document.querySelector('.home_text14')
const headerText15 = document.querySelector('.home_text15')
const headerText16 = document.querySelector('.home_text16')
const headerText17 = document.querySelector('.home_text17')
const headerText18 = document.querySelector('.home_text18')
const headerText19 = document.querySelector('.home_text19')
const headerText20 = document.querySelector('.home_text20')
const headerText21 = document.querySelector('.home_text21')
const headerText22 = document.querySelector('.home_text22')
const headerText23 = document.querySelector('.home_text23')
const headerText24 = document.querySelector('.home_text24')
const headerText25 = document.querySelector('.home_text25')
const headerText222 = document.querySelector('.home_text222')
const headerText2222 = document.querySelector('.home_text2222')
const headerText26 = document.querySelector('.home_text26')
const headerText27 = document.querySelector('.home_text27')
const headerText28 = document.querySelector('.home_text28')
const headerText29 = document.querySelector('.home_text29')
const headerText30 = document.querySelector('.home_text30')
const headerText31 = document.querySelector('.home_text31')
const headerText32 = document.querySelector('.home_text32')
const headerText33 = document.querySelector('.home_text33')
const headerText34 = document.querySelector('.home_text34')

btns.forEach(e => {
    e.addEventListener('click', () => {
        const til = e.getAttribute("lang")
        headerText1.textContent = translate[til].text1
        headerText2.textContent = translate[til].text2
        headerText3.textContent = translate[til].text3
        headerText4.textContent = translate[til].text4
        headerText5.textContent = translate[til].text5
        headerText6.textContent = translate[til].text6
        headerText7.textContent = translate[til].text7
        headerText8.textContent = translate[til].text8
        headerText9.textContent = translate[til].text9
        headerText10.textContent = translate[til].text10
        headerText11.textContent = translate[til].text11
        headerText12.textContent = translate[til].text12
        headerText13.textContent = translate[til].text13
        headerText14.textContent = translate[til].text14
        headerText15.textContent = translate[til].text15
        headerText16.textContent = translate[til].text16
        headerText17.textContent = translate[til].text17
        headerText18.textContent = translate[til].text18
        headerText19.textContent = translate[til].text19
        headerText20.textContent = translate[til].text20
        headerText21.textContent = translate[til].text21
        headerText22.textContent = translate[til].text22
        headerText23.textContent = translate[til].text23
        headerText24.textContent = translate[til].text24
        headerText25.textContent = translate[til].text25
        headerText222.textContent = translate[til].text222
        headerText2222.textContent = translate[til].text2222
        headerText26.textContent = translate[til].text26
        headerText27.textContent = translate[til].text27
        headerText28.textContent = translate[til].text28
        headerText29.textContent = translate[til].text29
        headerText30.textContent = translate[til].text30
        headerText31.textContent = translate[til].text31
        headerText32.textContent = translate[til].text32
        headerText33.textContent = translate[til].text33
        headerText34.textContent = translate[til].text34
    })
});

var translate = {
    uz: {
        text1: "Uy",
        text2: "Biz haqimizda",
        text3: "Bog'lanish",
        text4: "Matnni o'zgartirish uchun ikki marta bosing",
        text5: "Ushbu paragrafga uslub berish uchun ushbu paragrafni tanlang, so'ngra uning uslublarini tahrir qiling",
        text6: "Dizaynerning o'ng tomonidagi uslublar yorlig'i.",
        text7: "Ushbu havolani o'ng paneldagi sozlamalar yorlig'ida tahrirlang",
        text8: "O'ng panelda joylashgan navigator yorlig'ida siz mumkin",
        text9: "Barcha elementlaringizni bir joyda ko'ring",
        text10: "Sinf nima?",
        text11: "Sinf shunchaki element nomi emas balki siz yaratgan sarlavha bo'lib siz xuddi shinday",
        text12: "uslubda bo'lishini hohlagan boshqa elementlarga qo'shishingiz mumkin E'tibor ",
        text13: "bering agar siz ushbu paragrafni tanlab uni o'zgartirishingiz u shunday bo'ladi",
        text14: "Quyidagi paragrafga ham ta'sir qiladichunki ular bir xil sinfga ega",
        text15: "Rasm hajmini o'zgartirish uchun uni ikki marta bosing",
        text16: "Rasmni almashtirish uchun uni ikki ta bosing",
        text17: "Ota-onalar va matnni tekislash",
        text18: "Hozirga qadar siz veb-pdizayin oddiy qilib aytganda qutilar ichidagi matn va rasmlari bo'lgan bir",
        text19: "qator qutilar ekanligini payqagan bo'lishingiz mumkin Ushbu matnning asosiy elementini O'ngga 2",
        text20: "tanlab ko'ring so'ngra matnni tekshirib ko'ring",
        text21: "Tartibga oid maslahat",
        text22: "Flexboxelementining joylashish yo'nalishini gorizantaldan vertikalga o'zgartiring",
        text23: "Flexbox - bu ostidagi uslublar yorlig'ida joylashgan display sozlamalar",
        text24: "Layout > display sozlamalar",
        text25: "1- Qadam",
        text222: "2- Qadam",
        text2222: "3- Qadam",
        text26: "1- ustunni tanlash uchun bosing bu siz o'qiyotgan",
        text27: "ushbu paragraf hozirda joylashgan oq",
        text28: "qutidir",
        text29: "Endi 1- ustun tanlangan bo'lsa klaviaturadagi",
        text30: "yuqoriga o'qni bosing va asosiy elementni",
        text31: "tanlang: Ustunni o'rash 1",
        text32: " Ustunni o'rash 1 tanlangan holda  Moslashuvchan",
        text33: "tartib uslublari panelida yuqorida ko'rsatilgan",
        text34: "belgini bosing",
    },
    english: {
        text1: "Home",
        text2: "About",
        text3: "Contact",
        text4: "Double click text to change it",
        text5: "To style this paragraph select this paragraph then edit its styles in the",
        text6: "Style tab on the right side of the Designer.",
        text7: "Edit this link in the settings tab in the right panel",
        text8: "In the navigator tab located in the right panel you can",
        text9: "see all your elements in one place.",
        text10: "What is a Class?",
        text11: "A Class is more than just the name of an element, it is a title you create that",
        text12: " can be added to other elements that you'd like to be styled the same way",
        text13: "Notice that if you select this paragraph, and change it, it will effect the",
        text14: "paragraph below as well, since they have the same Class.",
        text15: "You can also double click an image to change its size.",
        text16: "You can also double click an image to change its size.",
        text17: "Parents, and text alignment",
        text18: "By now you may have noticed that web design, simply put, is a series of boxes",
        text19: "inside of boxes with text and images inside of them. Try selecting the parent",
        text20: "element of this text then changing the text alignment.",
        text21: "Layout tip",
        text22: "Change the layout direction of a flexbox element from horizontal to vertical.",
        text23: "Flexbox is a display setting found in the styles tab under",
        text24: "Layout > Display Settings",
        text25: "Step 1",
        text222: "Step 2",
        text2222: "Step 3",
        text26: "Click to select Column 1 which is the ",
        text27: " white box that this paragraph you're",
        text28: "reading is currently inside of.",
        text29: "Now that Column 1 is selected, press the",
        text30: " up arrow on your keyboard, selecting ",
        text31: "the parent element: Column Wrap 1",
        text32: "With Column Wrap 1 selected, click the icon ",
        text33: "shown above in the Layout >",
        text34: " Flex Layout styles panel.",
    }
}

