$(document).ready(function() {

                  
                  var winCounter = 0;
                  var orientationValue = 1;
                  var orientationStrings = ["South West", "North", "South East", "West", "South", "North West", "East", "North East"];
                  var orientations = ["135", "0", "225", "90", "180", "45", "270", "315"];
                  var accuracy = "20"; //in degrees
                  var alpha = 0;

              
                 
                  document.getElementById('rewardarea').style.visibility = "hidden";
                  document.getElementById('failarea').style.visibility = "visible";
                  /*if(window.DeviceOrientationEvent) {
                                     window.addEventListener('deviceorientation', function(event) {
                                                alpha = Math.floor(event.alpha); //Round down to integer
                                                    }, false );
                  }
                  
                  $("#button").click(function() {


                                      if (orientationValue==1 && (360 - accuracy < alpha || alpha < accuracy) ||
                                       ((orientations[orientationValue] - accuracy) < alpha && alpha < (orientations[orientationValue] + accuracy) ) ) { //special rule for north because of overflow
                                      
                                       winCounter++;
                                       $("#mainarea").hide();
                                       $("#rewardarea").show();

                                      }
                                      else {
                                        winCounter = 0;
                                       $("#mainarea").hide();
                                       $("#failarea").show();
                                      }
                                      window.setTimeout(function() {
                                      $("#winCounter").text(winCounter); //Set wincounter
                              
                                      orientationValue = Math.floor((Math.random() * 8)); //random new orientation array position 0-8
                                      $("#direction").text(orientationStrings[orientationValue]); //Set direction text    
                                        
                                        
                                      $("#rewardarea").hide();
                                      $("#failarea").hide();
                                      $("#mainarea").show();

                                      }, 2000);
                                    

                                 
                                    
                                    
                    });
                    */
                    
});
