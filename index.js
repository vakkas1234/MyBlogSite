function click1(){
   var newwindow = window.open("","_blank")
   newwindow.document.write("<html><head><title>BlogDetayları</title> <script src='geridon.js'></script> </head>")
   newwindow.document.write("<body><h2>Bralw Starsda Sıralamaya Girmek</h2> ")
   newwindow.document.write("<img  id='img1' src='images/bralwstarssıralama.jpeg'  >")
   newwindow.document.write("<link rel='stylesheet' href='style.css'> ")  
  newwindow.document.write("<p>Arkadaslar spike ile British virgin adaları sıralamasına girdim.</p>")
 newwindow.document.write("<p>nasıl yaptığımdan bashedecegım.Öncelikle zaten 500 kupa yapmak karakteri</p>")
newwindow.document.write("<p>zor değil ondan sonrası zorlaşıyor.Öncelikle sabırlı bir şekilde her gün oyunu oynamanız lazım</p> ")
newwindow.document.write("<p> Ondan sonra zaten sıralamaya rahatça girebliyorsunuz </p>")
newwindow.document.write(" ")
newwindow.document.write("<button onclick='click2()'>Geri don </button>")
newwindow.document.write("</body> </html>")
newwindow.document.close()

}
function beforeunload(){
    return "beforeunload"
}