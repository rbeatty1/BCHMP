// Leaflet - Return to Map Center [Created and maintained by pwldp | https://github.com/pwldp/leaflet.viewcenter]

		L.Control.ViewCenter = L.Control.extend({
			options: {
				position: 'bottomright',
				title: 'Return to Default Extent',
				forceSeparateButton: true,
				vcLatLng: [39.87, -74.73],
				vcZoom: 10,
        
			},

			onAdd: function (map) {
				var className = 'leaflet-control-view-center', container;
				
				if(map.zoomControl && !this.options.forceSeparateButton) {
					container = map.zoomControl._container;
				} else {
					container = L.DomUtil.create('div', 'leaflet-bar');
				}
				
				this._createButton(this.options, className, container, this.setCenterView, map);

				return container;
			},
			
			_createButton: function (opts, className, container, fn, context) {
				var link = L.DomUtil.create('a', className, container);
				link.href = '#';
				link.title = opts.title;

				var zoom = opts.vcZoom || 6;
				
				L.DomEvent
					.addListener(link, 'click', L.DomEvent.stopPropagation)
					.addListener(link, 'click', L.DomEvent.preventDefault)
					.addListener(link, 'click', function(){
					    context.setView(opts.vcLatLng, zoom);
					}, context);
				return link;
			}
		});

		L.control.viewcenter = function (options) {
			return new L.Control.ViewCenter(options);
		};

// load defined layer group

function loadLayerGroup(input, data, visible){
	lyrGroup.removeFrom(map);
    lyrGroup.clearLayers();
    for (z = 0; z < data.length; z++){
    	if (data[z].category == input){
    		for (y = 0; y < data[z].layers.length; y++){
		        for (var x=0; x < visible.length; x++){
		            if (data[z].layers[y].name === visible[x].layer){
		            	if (data[z].layers[y].name === 'bizCenters' || data[z].layers[y].name === 'luCenters' || data[z].layers[y].name === 'freightCenters'){
		            		console.log(data[z].layers[y].name)
			                lyr = L.esri.featureLayer({
			                	url: data[z].layers[y].url,
			                	ignoreRenderer: false,
			                	where: data[z].layers[y].qry
			                });
			                lyrGroup.addLayer(lyr);
			            }
			            else{		            	
			            	lyr = L.esri.featureLayer({
			            		url: data[z].layers[y].url,
			            		ignoreRenderer: false
			            	})
			            	lyrGroup.addLayer(lyr);
			            }
		            }
		        }
		    }
	    }
    };
    lyrGroup.addTo(map);   
}


