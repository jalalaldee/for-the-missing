NewCombo = function(args){
    var mydiv =   "<div style="margin-bottom:20px">"+"
            <input class="easyui-combobox" name="language" style="width:26%;" data-options="
                    url: 'JSON/combobox_data1.json',\
                    method: 'get',\
                    valueField: 'id',\
                    textField: 'text',\
                    panelWidth: 350,\
                    multiple:true,\
                    formatter: formatItem,\
                    label: 'Language:',\
                    labelPosition: 'top'\
                    ">"+"
        </div>"
}