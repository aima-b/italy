ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:23033").setExtent([-706564.884380, 3976144.095236, 1323182.093334, 5329308.747046]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RegionesHabKm2_1 = new ol.format.GeoJSON();
var features_RegionesHabKm2_1 = format_RegionesHabKm2_1.readFeatures(json_RegionesHabKm2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_RegionesHabKm2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionesHabKm2_1.addFeatures(features_RegionesHabKm2_1);
var lyr_RegionesHabKm2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RegionesHabKm2_1, 
                style: style_RegionesHabKm2_1,
                interactive: true,
    title: 'Regiones (Hab/Km2)<br />\
    <img src="styles/legend/RegionesHabKm2_1_0.png" /> 38 - 79 <br />\
    <img src="styles/legend/RegionesHabKm2_1_1.png" /> 79 - 123 <br />\
    <img src="styles/legend/RegionesHabKm2_1_2.png" /> 123 - 201 <br />\
    <img src="styles/legend/RegionesHabKm2_1_3.png" /> 201 - 332 <br />\
    <img src="styles/legend/RegionesHabKm2_1_4.png" /> 332 - 418 <br />'
        });
var format_Capital_2 = new ol.format.GeoJSON();
var features_Capital_2 = format_Capital_2.readFeatures(json_Capital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Capital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_2.addFeatures(features_Capital_2);
var lyr_Capital_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_2, 
                style: style_Capital_2,
                interactive: true,
                title: '<img src="styles/legend/Capital_2.png" /> Capital'
            });
var format_Cuerposdeagua_3 = new ol.format.GeoJSON();
var features_Cuerposdeagua_3 = format_Cuerposdeagua_3.readFeatures(json_Cuerposdeagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Cuerposdeagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerposdeagua_3.addFeatures(features_Cuerposdeagua_3);
var lyr_Cuerposdeagua_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerposdeagua_3, 
                style: style_Cuerposdeagua_3,
                interactive: true,
                title: '<img src="styles/legend/Cuerposdeagua_3.png" /> Cuerpos de agua'
            });
var format_Trenes_4 = new ol.format.GeoJSON();
var features_Trenes_4 = format_Trenes_4.readFeatures(json_Trenes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Trenes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trenes_4.addFeatures(features_Trenes_4);
var lyr_Trenes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trenes_4, 
                style: style_Trenes_4,
                interactive: true,
                title: '<img src="styles/legend/Trenes_4.png" /> Trenes'
            });
var format_Rutas_5 = new ol.format.GeoJSON();
var features_Rutas_5 = format_Rutas_5.readFeatures(json_Rutas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Rutas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_5.addFeatures(features_Rutas_5);
var lyr_Rutas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_5, 
                style: style_Rutas_5,
                interactive: true,
                title: '<img src="styles/legend/Rutas_5.png" /> Rutas'
            });
var format_Rios_6 = new ol.format.GeoJSON();
var features_Rios_6 = format_Rios_6.readFeatures(json_Rios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Rios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_6.addFeatures(features_Rios_6);
var lyr_Rios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_6, 
                style: style_Rios_6,
                interactive: true,
                title: '<img src="styles/legend/Rios_6.png" /> Rios'
            });
var format_Puertos_7 = new ol.format.GeoJSON();
var features_Puertos_7 = format_Puertos_7.readFeatures(json_Puertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Puertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puertos_7.addFeatures(features_Puertos_7);cluster_Puertos_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Puertos_7
});
var lyr_Puertos_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Puertos_7, 
                style: style_Puertos_7,
                interactive: true,
                title: '<img src="styles/legend/Puertos_7.png" /> Puertos'
            });
var format_Aeropuertos_8 = new ol.format.GeoJSON();
var features_Aeropuertos_8 = format_Aeropuertos_8.readFeatures(json_Aeropuertos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23033'});
var jsonSource_Aeropuertos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeropuertos_8.addFeatures(features_Aeropuertos_8);cluster_Aeropuertos_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Aeropuertos_8
});
var lyr_Aeropuertos_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Aeropuertos_8, 
                style: style_Aeropuertos_8,
                interactive: true,
                title: '<img src="styles/legend/Aeropuertos_8.png" /> Aeropuertos'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RegionesHabKm2_1.setVisible(true);lyr_Capital_2.setVisible(true);lyr_Cuerposdeagua_3.setVisible(true);lyr_Trenes_4.setVisible(true);lyr_Rutas_5.setVisible(true);lyr_Rios_6.setVisible(true);lyr_Puertos_7.setVisible(true);lyr_Aeropuertos_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RegionesHabKm2_1,lyr_Capital_2,lyr_Cuerposdeagua_3,lyr_Trenes_4,lyr_Rutas_5,lyr_Rios_6,lyr_Puertos_7,lyr_Aeropuertos_8];
lyr_RegionesHabKm2_1.set('fieldAliases', {'pop_Sup_km': 'Superficie (Km2)', 'Region': 'Región', 'Densidad': 'Densidad', 'PoblaciÃ�': 'Población', });
lyr_Capital_2.set('fieldAliases', {'Regi�n': 'Región', 'NAME_2': 'Nombre', 'Poblaci�n': 'Población', 'Fundaci�n': 'Fundación', 'Idioma': 'Idioma', 'Moneda': 'Moneda', 'Superficie': 'Superficie (Km2)', 'Densidad': 'Densidad (Hab/Km2)', });
lyr_Cuerposdeagua_3.set('fieldAliases', {'Superficie': 'Superficie (Km2)', 'Nombre': 'Nombre', });
lyr_Trenes_4.set('fieldAliases', {'EXS_DESCRI': 'Estado', 'FCO_DESCRI': 'Tipo', });
lyr_Rutas_5.set('fieldAliases', {'SECONDONOM': 'Nombre', });
lyr_Rios_6.set('fieldAliases', {'HYC_DESCRI': 'Tipo', 'NAM': 'Nombre', });
lyr_Puertos_7.set('fieldAliases', {'nome': 'Nombre', 'localita': 'Localidad', 'Region': 'Región', });
lyr_Aeropuertos_8.set('fieldAliases', {'Comune': 'Comuna', 'Provincia': 'Provincia', 'Regione': 'Región', 'Denominazi': 'Nombre', });
lyr_RegionesHabKm2_1.set('fieldImages', {'pop_Sup_km': 'TextEdit', 'Region': 'TextEdit', 'Densidad': 'TextEdit', 'PoblaciÃ�': 'TextEdit', });
lyr_Capital_2.set('fieldImages', {'Regi�n': 'TextEdit', 'NAME_2': 'TextEdit', 'Poblaci�n': 'TextEdit', 'Fundaci�n': 'Range', 'Idioma': 'TextEdit', 'Moneda': 'TextEdit', 'Superficie': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_Cuerposdeagua_3.set('fieldImages', {'Superficie': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Trenes_4.set('fieldImages', {'EXS_DESCRI': 'TextEdit', 'FCO_DESCRI': 'TextEdit', });
lyr_Rutas_5.set('fieldImages', {'SECONDONOM': 'TextEdit', });
lyr_Rios_6.set('fieldImages', {'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', });
lyr_Puertos_7.set('fieldImages', {'nome': 'TextEdit', 'localita': 'TextEdit', 'Region': 'TextEdit', });
lyr_Aeropuertos_8.set('fieldImages', {'Comune': 'TextEdit', 'Provincia': 'TextEdit', 'Regione': 'TextEdit', 'Denominazi': 'TextEdit', });
lyr_RegionesHabKm2_1.set('fieldLabels', {'pop_Sup_km': 'header label', 'Region': 'header label', 'Densidad': 'header label', 'PoblaciÃ�': 'header label', });
lyr_Capital_2.set('fieldLabels', {'Regi�n': 'header label', 'NAME_2': 'header label', 'Poblaci�n': 'header label', 'Fundaci�n': 'header label', 'Idioma': 'header label', 'Moneda': 'header label', 'Superficie': 'header label', 'Densidad': 'header label', });
lyr_Cuerposdeagua_3.set('fieldLabels', {'Superficie': 'header label', 'Nombre': 'header label', });
lyr_Trenes_4.set('fieldLabels', {'EXS_DESCRI': 'header label', 'FCO_DESCRI': 'header label', });
lyr_Rutas_5.set('fieldLabels', {'SECONDONOM': 'header label', });
lyr_Rios_6.set('fieldLabels', {'HYC_DESCRI': 'header label', 'NAM': 'header label', });
lyr_Puertos_7.set('fieldLabels', {'nome': 'header label', 'localita': 'header label', 'Region': 'header label', });
lyr_Aeropuertos_8.set('fieldLabels', {'Comune': 'header label', 'Provincia': 'header label', 'Regione': 'header label', 'Denominazi': 'header label', });
lyr_Aeropuertos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});