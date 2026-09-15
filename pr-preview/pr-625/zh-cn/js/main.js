const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

function toggleTheClick(event) {	
	// Make sure that we've got the button selected
	var tag = event.target
	while(tag.tagName != "BUTTON") {
		tag = tag.parentElement;
		if (tag == document) 
		{
			return;
		}
	}
	
	var openOnes = document.getElementsByClassName('openitup');
	for(var i=0; i<openOnes.length; i++)
	{

		if(openOnes[i].id != (tag.id + "-content") ) {
			openOnes[i].classList.remove("openitup");
		}
	}
	var itemsWithClick = document.getElementsByClassName('click');
	for(var i=0; i<itemsWithClick.length; i++)
	{
		if(itemsWithClick[i].id != tag.id) {
			itemsWithClick[i].classList.remove("click");
		}
	}
	document.getElementById(tag.id + "-content").classList.toggle("openitup");
	tag.classList.toggle("click");
}


document.getElementById('btn1').onclick = toggleTheClick;
document.getElementById('btn2').onclick = toggleTheClick;
document.getElementById('btn3').onclick = toggleTheClick;
document.getElementById('btn4').onclick = toggleTheClick;
document.getElementById('btn5').onclick = toggleTheClick;
document.getElementById('btn6').onclick = toggleTheClick;
document.getElementById('btn7').onclick = toggleTheClick;
document.getElementById('btn8').onclick = toggleTheClick;
document.getElementById('btn9').onclick = toggleTheClick;
document.getElementById('btn10').onclick = toggleTheClick;
document.getElementById('btn11').onclick = toggleTheClick;
document.getElementById('btn12').onclick = toggleTheClick;
document.getElementById('btn13').onclick = toggleTheClick;
document.getElementById('btn14').onclick = toggleTheClick;