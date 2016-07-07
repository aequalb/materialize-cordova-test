/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 
 * Modified by Aequalb (aequalb at gmail dot com) for use in GRII.net mobile application.
 */

function selectfill(id, data){
    document.getElementById(id).innerHTML = 
    document.getElementById(id).innerHTML 
    + '<option value=\"'+data.title+'\">'+data.title+'</option>';
    console.log(data.title);
    $('select').material_select();
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        $(document).ready(function (){
            console.log("ready "+id);
            // Initialize datepickers
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15 // Creates a dropdown of 15 years to control year
            });
            /* // Initialize the selector elements.
            // Fetch from synchronous AJAX query: Without the data you cannot fill the form.
            $.ajax("https://grii.net", {
                async=false,
                dataType: 'text',
            }).done(function(html) {
                var parsedData = JSON.parse(html);
                for(var i = 0; i < parsedData.length; i++){
                    $.('#kewarganegaraan-select').append(parsedData[i]);  
                }
            }); */
            $('select').material_select();
        });
        var root = 'http://jsonplaceholder.typicode.com';

        $.ajax({
          url: root + '/posts/1',
          method: 'GET'
        }).done(function(data) {
            selectfill('kewarganegaraan-select', data);
        });
        /*
        // You need to initialize the element here, before Materialize.js kicks in, to edit the
        // DOM elements, if you want to init the "raw" index.html
        var daftarNegara = ['Ajer', 'Indo', 'Malay', 'Arab', 'Brunai', 'Australia', 'Amerika'];
        for(var i=0; i < daftarNegara.length; i++){
            var namaNegara = daftarNegara[i];
            document.getElementById('kewarganegaraan-select').innerHTML = 
                document.getElementById('kewarganegaraan-select').innerHTML 
                + '<option value=\"'+namaNegara+'\">'+namaNegara+'</option>';
        };
        */
        $('select').material_select();
        document.getElementById('kewarganegaraan-select').attr('disabled', 'false');
    }
};

app.initialize();