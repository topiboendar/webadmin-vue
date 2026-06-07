const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const childList = document.querySelectorAll('aside li');
const main = document.querySelector('.main-content');

burger.addEventListener('click', () => {
	const linkGroup = document.querySelectorAll('.lg-show');
	linkGroup.forEach((element) => {
		if(element.style.display != 'none' && !sidebar.classList.contains('sidebar-toggled')){
			element.style.display = 'none';
		}
	})

	childList.forEach((item) => {
		if(item.classList.contains('lnk-active-group')){
			item.classList.remove('lnk-active-group')
		}
	})

	sidebar.classList.toggle('sidebar-toggled');
});

for(const contentWrap of main.children){
	if(contentWrap.classList.contains('content-wrapper')){
		for(const tableWrap of contentWrap.children){
			if(tableWrap.classList.contains('table-wrapper')){
				const mainEl = document.querySelector('main');
				main.style.overflow = 'hidden';
				contentWrap.style.width = '100%';
				main.style.background = '#f8f9fc';

				tableWrap.style.overflowX = 'scroll';

				for (const bodyTable of tableWrap.children){

					if(bodyTable.classList.contains('body-table')){
						bodyTable.style.overflowX = 'scroll';
						bodyTable.style.background = '#fff';
					
					}
				}
			}
		}
	}
}

const btnAction = document.querySelectorAll('#action-tbl');

btnAction.forEach((item) => {
	
	const popItem = item.nextElementSibling;
	popItem.style.display = 'none';

	item.addEventListener('click', () => {
		
		if (popItem.style.display !== 'flex') {
            btnAction.forEach((button) => {
                const otherPopItem = button.nextElementSibling;
                otherPopItem.style.display = 'none';
            })

            popItem.style.display = 'flex';
        } else {
            popItem.style.display = 'none';
        }
		
	})
})


childList.forEach((event) => {

	const linkGroup = document.querySelectorAll('.lg-show');
	linkGroup.forEach((element) => { element.style.display = 'none'; });

	event.addEventListener('click', () => {

		if(!event.classList.contains('lnk-active')){
			if(!event.classList.contains('lk-group') && !event.classList.contains('lg-child')){
				childList.forEach((item) => {
					item.classList.remove('lnk-active');
	
				});
				
				event.classList.add('lnk-active');

			} else {
				if(!event.classList.contains('lg-child')){
					childList.forEach((item) => {
						item.classList.remove('lnk-active-group');
					});
	
					event.classList.add('lnk-active-group');
				}

			}

			if(event.matches('.lk-group.lnk-active-group')){
				const listItem = event.nextElementSibling;
				if(listItem.style.display == 'none'){
					linkGroup.forEach((element) => { element.style.display = 'none'; });
					listItem.style.removeProperty('display');
				} else {
					linkGroup.forEach((element) => { element.style.display = 'none'; });
					childList.forEach(item => item.classList.remove('lnk-active-group'));
				}

			}

		}
		
	});
	
});


const tabletScreen = window.matchMedia('(min-width: 470px)');

if(tabletScreen.matches){
	sidebar.classList.remove('sidebar-toggled');	
}
