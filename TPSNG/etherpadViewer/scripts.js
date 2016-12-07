	window.onload = function () {
				var length = window.tpsng_data.length;			
				for (var i = 0; i < length; i++)
				{
					var tpsng_info = window.tpsng_data[i];
					element = document.createElement('li');
					element.innerHTML = `<a title="${tpsng_info["title"]}" href="${tpsng_info["url"]}">${tpsng_info["title"]}</a>`;
					if (tpsng_info["type"]  == "Track")
						track.appendChild(element);
					if (tpsng_info["type"]  == "Practice Space")
						practice_space.appendChild(element);
					if (tpsng_info["type"]  == "Network Gathering")
						network_gathering.appendChild(element);
				}
				etherpad_menu.addEventListener('click', click_url, true);
			};




var url_iframe_map = {};
window.current_iframe = null;

function click_url(event) {
	if(event.target.tagName == "A"){

		event.preventDefault(true);
		
		if(current_iframe != null)
			current_iframe.style.visibility = "hidden";

		var url = event.target.href;
		var iframe;

		if(url in url_iframe_map)
			iframe = url_iframe_map[url];
		else {
			iframe = document.createElement('iframe');
			iframe.src = url;
			url_iframe_map[url] = iframe;
		}

		if(!etherpad.contains(iframe))
			etherpad.appendChild(iframe);

		current_iframe = iframe;
		current_iframe.style.visibility = "visible";
	}
}