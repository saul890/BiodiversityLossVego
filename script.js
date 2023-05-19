
//LINE CHART

const forestDataSource = "data/lpi_forest.csv"; // Data Source

const unpack = (data, key) => data.map(row => row[key]); //Unpack the data

Plotly.d3.csv("data/lpi_forest.csv", lpi_data => {

  // Unpack data into variables
  const lpi = unpack(lpi_data, 'living_planet_index_average'); 
  const forest = unpack(lpi_data, 'Forest');
  const year = unpack(lpi_data, 'Year');

    // Data Object
    var trace1 = {
        x: year, // X axis of line
        y: lpi, // Y axis of line
        name: 'Living Planet Index', //Set Label
        type: 'scatter', // Set chart type
        marker: { // Style line
            color: "#127760" // Color of line
        },
        hovertemplate: '<b>%{y:.2f}</b> (1970=1)', // Style hover information
    };

    //Data Object - Trace for Forest Area
    var trace2 = {
        x: year, // X axis of line
        y: forest, // Y axis of line
        yaxis: 'y2', // Put on secondary Y axis
        name: 'Forest Area', // Name the trace
        type: 'scatter', // Type of chart
        
        marker: {
            color: '#872000' // Colour of line
        },
        hovertemplate: '<b>%{y:.2f}</b> Billion Hectares', // Style hover information
    };

    // Layout of line chart
    var layout = {
      showlegend: true, // Make the legend visible
      width: 1000, // Width of chart
      height: 650, // Height of chart
    
      
      legend: {
        x: 0.265, // Position the legent
        y: -0.25, // Position the legent
        orientation: 'h', // Make legend horizontal
        font: {
          size: 18, // Set font size to 18
          family: 'Inria Serif, serif', // Set font family
        },
      },

      // Custom font
      font: {
        family: 'Inria Serif, serif', // Set font family
        size: 12, // Set font size to 12
        color: '#2b2d42', // Set color of text
      },

      xaxis: {
        zerolinewidth: 1, // Make the zero line visible
        linecolor: '#636363', // Colour of the zero line 
        title:{
          text: 'Year', // Title of x-axis
          standoff: 30, // Create space between axis title and axis
          font: {
            size: 18, // axis title font size to 18
            family: 'Inria Serif, serif', // axis title font family
            },
          },
        fixedrange: true, // Make the chart have a fixed x axis (user can't move around)
        showgrid: true, // Remove grid lines
        },

        yaxis: {
          zerolinewidth: 1, // Make the zero line visible
          fixedrange: true, // Make the chart have a fixed y axis (user can't move around)
          linecolor: '#636363', // Colour of the zero line
          showgrid: false, // Turn off y axis grid lines
          title: {
            text: 'Living Planet Index (1970=1)', // Title
            standoff: 100, // Create space between axis title and axis
            font: {
              size: 18, // axis title font size to 18
              family: 'Inria Serif, serif', // axis title font family
              },
            },
            titlefont: {color: '#000000'}, // Color of axis title
            tickfont: {color: '#000000'}, // Color of axis numbers
          },

        yaxis2: {
          zerolinewidth: 1, // Make the zero line visible
          linecolor: '#636363',  // Colour of the zero line
          showgrid: false, // Turn off y axis grid lines
          fixedrange: true, // Make the chart have a fixed y axis (user can't move around)
          title: {
            text: 'Forest Area (1 Billion ha)', // axis title
            standoff: 100, // Create space between axis title and axis
            font: {
              size: 18, // Axis title font size
              family: 'Inria Serif, serif', // Axis title font family
              },
            },
            titlefont: {color: '#000000'}, // Color of axis title
            tickfont: {color: '#000000'}, // Color of axis numbers
            overlaying: 'y', // Secondary y axis overlays primary y axis
            side: 'right', // position the secondary axis on the right
          }
      };

  
  //Popping data into an array object
  var data = [trace1, trace2];

  //PLotly NewPLot function, followed by the command "Add fraes: which generates
  Plotly.newPlot('line_chart', data, layout, {displayModeBar: false})
}); // Close Plotly d3


// PIE CHART
var data = [{
  hoverinfo: 'label', // Show the label when user hovers
    values: [80, 20], // Set 80% and 20% values
    labels: ['Agriculture', 'Other Drivers'], // Set labels in order
    type: 'pie', // Set type as pie chart
    marker: {
        colors: ["#872000", "#545454"], // Set colors in order
      }
  }];
  
  var layout = {
    font: {
      family: 'Inria Serif, serif',
      size: 18,
      color: '#2b2d42',
    },
    legend: {
      x: 0.8, // Position the legent
      y: 1, // Position the legent
      font: {
        size: 18, // Font size 18
        family: 'Inria Serif, serif', // set font family
      },
    },
      title: false, // remove chart title
      width: 1300, // width of chart area
      height: 700, // height of chart area
  };

  var config = {
    displayModeBar: false // remove config options
  };

  //PLotly NewPLot function
  Plotly.newPlot('pie_chart', data, layout, config);


// Bubble Chart 1
// Data Source
const proteinDataSource = "data/land_use_by_protein.csv";

//Unpack the data
const unpackProtein = (data, key) => data.map(row => row[key]);

Plotly.d3.csv("data/land_use_by_protein.csv", protein_data => {

  //unpack data
  const size = unpack(protein_data, 'Land'); // Sizes of land
  const name = unpack(protein_data, 'Entity'); // Names of food

  var trace1 = {
    x: [0,100], // Positioning along x-axis
    y: [0,0], // Positioning along y-axis
    mode: 'markers+text',// Place markers and text on graph
    textposition: 'inside', // position label inside circle
    text: name, // populate label with information from csv
    
    textfont: {
      family: 'Inria Serif, serif', // set font family
      size: 18, // set font size
      color: '#FFFFFF', // set font colour
    },
    
    
    marker: {
      size: size, // Size markers according to CSV file
      color: "#872000", // marker color
      opacity: 1, // make marker non-transparent
    },
 
    name: "", // removes name from hover information
    hovertemplate: '<b>Land Required:</b> %{marker.size} ha', // Takes the markers size and displays it in the hover information
    
  };

  //Popping data into an array object
  var data = [trace1];
  
  var layout = {
    paper_bgcolor: 'rgba(0,0,0,0)',  // transparent background
    font: {
      family: 'Inria Serif, serif', // set font family
      size: 10, // set font size
      color: '#2b2d42', // set font color
    },

    hoverlabel: {
      namelength: "-1", // ensure label is on the left
    },

    hovermode: 'closest', // remove x axis hover label

    title: false, // remove chart title

    xaxis: {
      zeroline: true, // remove zero line
      visible: false, // remove x ticks
      showgrid: false, // remove grid lines
      fixedrange: true, // fixed range, user can't move around
      
    },
    yaxis: {
      zeroline: true, // remove zero line
      visible: false, // remove y ticks
      showgrid: false, // remove grid lines
      fixedrange: true, // fixed range, user can't move around
 
    },

    showlegend: false, // remove legend

    height: 900, // height of chart area
    width: 1000 // width of chart area 
  };
  var config = {
    displayModeBar: false // disable config options
  };

  //PLotly NewPLot function
  Plotly.newPlot('Livestock', data, layout, config);
});


// Bubble Chart 2
//Unpack the data
const unpackCrop = (data, key) => data.map(row => row[key]);

Plotly.d3.csv("data/crops.csv", protein_data => {

   //unpack data
   const size = unpack(protein_data, 'Land'); // Sizes of land
   const name = unpack(protein_data, 'Entity'); // Names of food



  // Used chatGPT to figure out how to code the dropdown with the CSV file options.
  // Used chatGPT to understand the this.value function
  // All comments are by me

  //DROPDOWN
  const listofEntity = [] // Empty array for names

  // For loop putting the names of the Entity's into the array 
  for (var i = 0; i < name.length; i++ ){ // increment through the list of names in the CSV file
    if (listofEntity.indexOf(name[i]) === -1 ){  // if the name is not found, run the next statement
      listofEntity.push(name[i]); // if the name is not found, add it to the listofEntity
    }
  }

  const dropdown = document.getElementById("dropdown"); // target the HTML dropdown element

  const options = listofEntity; // setting options to the listofEntity's (which are now the names from the CSV file)

  // Loop that iterates through listofEntity's and adds the names to the dropdown 
  for (let i = 0; i < listofEntity.length; i++) {
    const option = document.createElement("option"); // creates an option element
    option.value = "option" + (i + 1); // value attribute of the option is set to a string
    option.text = options[i]; // populating the option text with text from options
    dropdown.appendChild(option); // appends each option to the dropdown
  }

  // Changing the name and size when a dropdown option is selected.
  dropdown.addEventListener("change", function(){ // Event listener for when there is a change to the dropdown
    //const selected = options[this.selectedIndex] // Get the name of the selected name
    //console.log(selected)
    //console.log("Selected option: " + this.value);
    //console.log(size[this.value.split("")[6] - 1])

    var trace1 = {
    x: [0,100], // Positioning along x-axis
    y: [0,0], // Positioning along y-axis
     
      mode: 'markers+text', // Place markers and text on graph
      
    
      marker: {
        size: size[this.value.split("")[6] - 1], // get the size of the marker that corresponds with the option selected and make that the markers size
        color: "#127760", // color of marker
        opacity: 1, // make marker non transparent
      },

      name: "", // remove name from hover information
      hovertemplate: '<b>Land Required:</b> ' + parseFloat(size[this.value.split("")[6] - 1]) + ' ha', // converting the selected value into a floating number, then using string concatenation to display the number

    };
    
    // Data into an array object
    var data = [trace1];
    
    var layout = {
      paper_bgcolor: 'rgba(0,0,0,0)', // make background color transparent
      hovermode: 'closest', // remove x axis hover information
      xaxis: {
        zeroline: false, // make zero line invisible
        visible: false,  // make ticks invisible
        showgrid: false, // remove grid lines
        fixedrange: true // fixed range, user unable to move around
      },

      yaxis: {
        zeroline: true, // make zero line invisible
        visible: false, // make ticks invisible
        showgrid: false, // remove grid lines
        fixedrange: true // fixed range, user unable to move around
      },

      title: false, // remove title
      showlegend: false, // remove legend
      height: 200, // chart areas hight 
      width: 1000 // chart areas width 
    };

    var config = {
      displayModeBar: false, //remove config options
    };
   
    // plotly newplot function
    Plotly.newPlot('Crops', data, layout, config);
  })

  // Making sure an option appears by default when no change has been commited via the dropdown
  // Displaying the first dot in the CSV file
  var trace1 = {
    name: "", 
    x: [0,100], 
    y: [0, 0], 
    mode: 'markers+text', 
    textposition: 'right',
    marker: {
      size: size,
      color: "#127760",
      opacity: 1,
    },
    
    hovertemplate: '<b>Land Required:</b> %{marker.size} ha',
  
  };

  var data = [trace1];
    
  var layout = {
    hovermode: 'y',
    paper_bgcolor: 'rgba(0,0,0,0)', 
    
    xaxis: {
      zeroline: true, 
      visible: false, 
      showgrid: false,
      fixedrange: true
    },
    yaxis: {
      zeroline: true, 
      visible: false, 
      showgrid: false,
      fixedrange: true
    },
    title: false,
    showlegend: false,
    height: 200,
    width: 1000
  };
  
  var config = {
    displayModeBar: false,
  };
   
    Plotly.newPlot('Crops', data, layout, config);

});


// Stacked bar chart

// Livestock
var trace1 = {
  y: ['Global Calorie Supply', 'Global Protein Supply', 'Agricultural Land'], // labels
  x: [18, 37, 77], // corresponding values
  legendgroup: 'group2', // so that I can order the legend 
  name: 'Livestock', // name (shown in legend)
  type: 'bar',
  text: ['18%', '37%', '77%'], // corresponding text (displayed on chart)
  textposition: 'inside', // positioning text inside bars
  insidetextanchor: 'middle', // positioning text in center
  orientation: 'h', // bar chart horizontal instead of verticle
  marker: {
  color: "#872000", // setting color
  }
};

//Plants
var trace2 = {
  legendgroup: 'group1', // so that I can order the legend 
  y: ['Global Calorie Supply', 'Global Protein Supply', 'Agricultural Land'], // labels
  x: [82, 63, 23], // corresponding values
  text: ['82%', '63%', '23%'], // corresponding text (displayed on chart)
  textposition: 'inside', // positioning text inside bars
  insidetextanchor: 'middle', // positioning text in center
  name: 'Plant', // name (shown in legend)
  type: 'bar', // setting type to bar chart
  orientation: 'h', // bar chart horizontal instead of verticle
  marker: {
    color: "#127760", // setting color
    }
};

// popping data into an array object
var data = [trace1, trace2];

var layout = {
  hovermode: false, // remove hover mode
  barmode: 'stack', // stacking the charts together
  height: 800, // height of chart area
  width: 1300, // width of chart area
  margin:{
    l:350 // so that the chart labels are not cut off
  },
  xaxis: {
    zeroline: true, // remove zero line
    visible: false, // remove ticks
    showgrid: false, // remove grid lines
    fixedrange: true, // fixed range, user can't move around
  },
  yaxis: {
    zeroline: true, // remove zero line
    visible: true, // remove ticks
    showgrid: false, // remove grid lines
    fixedrange: true, // fixed range, user can't move around
    ticklen: 30, // Add spacing between labels and bars
    tickcolor: "#FFFFFF" // remove tick line 
  },

  font: {
    family: 'Inria Serif, serif', // set font family
    size: 18, // set font size
    color: '#2b2d42', // set font color
  },


};

var config = {
  displayModeBar: false, // remove config options
};

Plotly.newPlot('landuse', data, layout, config);


// SLIDER BUBBLE CHART
//Unpack the data
const unpackRich = (data, key) => data.map(row => row[key])

Plotly.d3.csv("data/Book4.csv", meat_data => {

    // SET UP VARIABLES FOR EACH ELEMENT IN THE BUBBLE CHART

    const gdp_92 = unpack(meat_data, 'GDP_92') // x
    const meat_92 = unpack(meat_data, 'Meat_92') // y
    //const pop_92 = unpack(meat_data, 'Population_92') //SIZE
    const country_92 = unpack(meat_data, 'Entity_92') // COUNTRY NAME
    const code_92 = unpack(meat_data, 'Code_92') // LABEL

    const gdp_98 = unpack(meat_data, 'GDP_98') // x
    const meat_98 = unpack(meat_data, 'Meat_98') // y
    //const pop_98 = unpack(meat_data, 'Population_98') //SIZE
    //const country_98 = unpack(meat_data, 'Entity_98') // COUNTRY NAME
    const code_98 = unpack(meat_data, 'Code_98') // LABEL

    const gdp_04 = unpack(meat_data, 'GDP_04') // x
    const meat_04 = unpack(meat_data, 'Meat_04') // y
    //const pop_04 = unpack(meat_data, 'Population_04') //SIZE
    //const country_04 = unpack(meat_data, 'Entity_04') // COUNTRY NAME
    const code_04 = unpack(meat_data, 'Code_04') // LABEL

    const gdp_10 = unpack(meat_data, 'GDP_10') // x
    const meat_10 = unpack(meat_data, 'Meat_10') // y
    //const pop_10 = unpack(meat_data, 'Population_10') //SIZE
    //const country_10 = unpack(meat_data, 'Entity_10') // COUNTRY NAME
    const code_10 = unpack(meat_data, 'Code_10') // LABEL

    const gdp_16 = unpack(meat_data, 'GDP_16') // x
    const meat_16 = unpack(meat_data, 'Meat_16') // y
    //const pop_16 = unpack(meat_data, 'Population_16') //SIZE
    //const country_16 = unpack(meat_data, 'Entity_16') // COUNTRY NAME
    const code_16 = unpack(meat_data, 'Code_16') // LABEL


    
    var trace1 = {
        name: "", // remove trace name
        y: meat_92, // set y axis to meat consumption
        x: gdp_92, // set x axis to gdp
        mode: 'markers+text', // display data as markers and text on chart
        text: code_92, // set text to country codes
        textposition: 'top', // position country codes above markers
        marker: {
          color: '#872000', // set marker color
        },
        customdata: country_92, // customdata acts like setting a variable. setting custom data to the names of the countries
        hovertemplate: '<b>Country:</b> %{customdata}', // name of the country will display upon hovering
        }

    // setting each frame to display data from different years
    var frames = [
      {
        name: '92', // naming the frame
        data: [
            {
                x: gdp_92, // mapping x axis of data
                y: meat_92, // mapping y axis of data
                text: code_92, // mapping country codes
            }
        ]
        },

      {
        name: '98', // naming the frame
        data: [
            {
                x: gdp_98, // mapping x axis of data
                y: meat_98, // mapping y axis of data
                text: code_98, // mapping country codes
                
            }
        ]
        },
        {
        name: '04', // naming the frame
        data: [
            {
                x: gdp_04, // mapping x axis of data
                y: meat_04, // mapping y axis of data
                text: code_04, // mapping country codes
            }
        ]
        },
        {
        name: '10', // naming the frame
        data: [
            {
                x: gdp_10, // mapping x axis of data
                y: meat_10, // mapping y axis of data
                text: code_10, // mapping country codes
            }
        ]
        },
        {
        name: '16', // naming the frame
        data: [{
            x: gdp_16, // mapping x axis of data
            y: meat_16, // mapping y axis of data
            text: code_16, // mapping country codes
        }]
        },

    ];

    var layout = {
      hovermode:'closest', // display hover info from closest marker
      font: {
        family: 'Inria Serif, serif', // set font family
        size: 12, // set font size
        color: '#2b2d42', // set font colour
      },
     
     /* dragmode: "pan",*/ // was going to allow users to drag around the chart, but it didn't really add anything to the article
      showlegend: false, // remove legend
   
      
      xaxis: {
        showgrid: false, // remove grid lines
        fixedrange: true, // fixed range

        title: {
          text: 'GDP Per Capita PPP (constant 2017 international $)', // axis title
          font: {
            family: 'Inria Serif, serif', // set font family
            size: 18, // set font size
            color: '#2b2d42', // set font color
            
          },
        }
      },
      yaxis: {
        showgrid: false, // remove grid lines
        fixedrange: true, // fixed range
        range: [0, 140], // set range to include all data within the view
        title: {
          text: 'Meat Available for Consumption Per Capita (Kg)', // axis title
          font: {
            family: 'Inria Serif, serif', // set font family
            size: 18, // set font size
            color: '#2b2d42', // set font color
          },
        }
      },
  
        title: {
          font: {
            family: 'Inria Serif, serif', // set font family
            size: 40, // set font size
            color: '#2b2d42', // set font color
          },

          text: 'GDP vs Meat Consumption' // set title text
        },

        width: 1150, // set chart area width
        height: 800, // set chart area height
        sliders: [{
  
          bgcolor: '#545454', // color of slider
          activebgcolor: 'black', // color of nob when held
     
            pad: {t: 80}, // space between slider and other elements
            currentvalue: { // shows the current value
                xanchor: 'right', // place current value info to right of slider
                prefix: 'Year: ', // prefix before current value
                font: {
                  family: 'Inria Serif, serif', // set font family
                  size: 20, // set font size
                  color: '#2b2d42', // set font color
                },
            },

            // set each step of the slider
            steps: [{
              label: '1992', // set label at this step
              method: 'animate', // animate between steps
              args: [
                  ["92"], { // move to this frame at this step (92)
                      mode: 'immediate', // begins new sequence immediately
                      transition: {
                        duration: 500, // how long the transition takes
                        easing: 'cubic-in-out' // setting type of easing
                      }
                  }
              ]
          },
              
              {
              label: '1998', // set label at this step
              method: 'animate', // animate between steps
              args: [
                  ["98"], { // move to this frame at this step (98)
                      mode: 'immediate', // begins new sequence immediately 
                      transition: {
                        duration: 500, // how long the transition takes
                        easing: 'cubic-in-out' // setting type of easing
                      }
                  }
              ]
          },
              
              {
                label: '2004', // set label at this step
                method: 'animate', // animate between steps
                args: [
                    ["04"], { // move to this frame at this step (04)
                        mode: 'immediate', // begins new sequence immediately
                        transition: {
                          duration: 500, // how long the transition takes
                          easing: 'cubic-in-out' // setting type of easing
                        }
                    }
                ]
            },
            {
                label: '2010', // set label at this step
                    method: 'animate', // animate between steps
                    args: [
                        ["10"], { // move to this frame at this step (10)
                            mode: 'immediate', // begins new sequence immediately
                            transition: {
                              duration: 500, // how long the transition takes
                              easing: 'cubic-in-out' // setting type of easing
                            }
                        }
                    ]
                },
            {
                label: '2016', // set label at this step
                    method: 'animate', // animate between steps
                    args: [
                        ["16"], { // move to this frame at this step (16)
                            mode: 'immediate', // begins new sequence immediately
                            transition: {
                              duration: 500, // how long the transition takes
                              easing: 'cubic-in-out' // type of easing
                            }
                        }
                    ]
                },
        ],

    }],

    //setting buttons to automate the slider itself
    updatemenus: [{
        type: 'buttons',
        showactive: false,
        x: 0,
        y: 0,
        xanchor: 'right',
        yanchor: 'top',
        direction: 'left',
        pad: {t: 60, r: -120},

        font: {
          family: 'Inria Serif, serif',
            size: 14,
            color: '#545454',
            },

        bgcolor: 'white',
        bordercolor: '#545454',
        borderwidth: 2,

        
        

    
        
        buttons: [
            {
                // Button 1: Play
                label: 'Play Animation',
                method: 'animate',
                args: [null, {
                    frame: {duration: 1000}, //Allow the user to see current state before animation
                    transition: {duration: 500}, // animation period
                    fromcurrent: true, // Specifies y whether the animation should continue from   the current frame or start from the beginning.
                    mode: 'next' //next will advance the animation to the next frame of the sequence
                    }],
            },
            /*
            {
                // Button 2: Pause  
                label: 'Pause',
                method: 'animate',
                args: [null, {
                    frame: {duration: 0},
                    mode: 'immediate',
                    transition: {duration: 0}
                }]
            }*/
        ], // Close Buttons object
    }],// Close Update menus

    }


var data = [trace1];

Plotly.newPlot('slide', data, layout, {scrollZoom: true, displayModeBar: false}).then(function() {
    Plotly.addFrames('slide', frames);
    });
});
