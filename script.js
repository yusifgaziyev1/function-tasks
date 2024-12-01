// 1.----> 
// İstifadəçidən dairənin sahəsini hesablamaq üçün lazım olan dəyərləri alın.
// və bir function içində onun hesablanmasın yazın. (dairənin sahəsi S = πr^2)



function sahesiniHesabla(eni, uzunlugu) {
    console.log(eni * uzunlugu);
}

sahesiniHesabla(10,30);

// NOT 1: Kvadratın eni 10 cm, uzunluğu isə 30 cm'dır. 

// 2.----> 
// İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını həyata keçirən bir function yazın.


let userNumber1 = parseInt(prompt("Zəhmət olmasa ilk rəqəmi və ya ədədi daxil edin."));
let userNumber2 = parseInt(prompt("Zəhmət olmasa ikinci rəqəmi və ya ədədi daxil edin."));

function hesabla(numberOne,numberTwo) {
    alert("Cavab: " + parseInt(numberOne + numberTwo) + "'dir. Vurma hesablamasının nəticəsini görmək üçün Enter düyməsini basın.");
    alert("Cavab: " + parseInt(numberOne * numberTwo));
}

hesabla(userNumber1, userNumber2);


// 3.----> 
// Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın 
// Məsələn 6776 -- YES
//         8989 -- NO
//         6807 -- NO
//         9009 -- YES


let number1 = prompt("Zəhmət olmasa 4 rəqəmli ədəd daxil edin");

function yoxla(number) {
    if (number1.length == 4) {
        if ((number1[0] == number1[3]) && (number1[1] == number1[2])) {
            alert("YES");
        } else {
            alert("NO");
        }
    } else {
        alert("Ədəd 4 rəqəmli deyil.")
    }
}

yoxla(number1);


// 4.----> 
// İstifadəçidən bir username alın. username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.

let username1 = prompt("İstifadəçi adınızı daxil edin: ");

function signInUser(username){
    alert(`Salam ${username1}`);
}

signInUser();


// 5.---->
// Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür

// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.

let enterNumber1 = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin."))

if (enterNumber1 != 100 && enterNumber1 != 0) {
    function enterNumber(enterNumber) {
        if (enterNumber1 > 100) {
            alert(`${enterNumber1} 100'dən böyükdür.`)
            if (enterNumber1 > 0) {
                alert(`${enterNumber1} müsbətdir.`);
                if (enterNumber1 % 2 == 0) {
                    alert(`${enterNumber1} cütdür.`);    
                } else {
                    alert(`${enterNumber1} təkdir.`);    
                }
            }
        } else {
            alert(`${enterNumber1} 100'dən kiçikdir.`)
            if (enterNumber1 > 0) {
                alert(`${enterNumber1} müsbətdir.`);
                if (enterNumber1 % 2 == 0) {
                    alert(`${enterNumber1} cütdür.`);    
                } else {
                    alert(`${enterNumber1} təkdir.`);    
                }
            } else {
                alert(`${enterNumber1} mənfidir.`);
                if (enterNumber1 % 2 == -1) {
                    alert(`${enterNumber1} təkdir.`);
                } else {
                    alert(`${enterNumber1} cütdür.`);
                }
            }
        }
    }
} else {
    alert("100 və 0 daxil edə bilməzsiniz!")
}

enterNumber();
