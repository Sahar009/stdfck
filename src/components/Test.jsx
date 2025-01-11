import React from 'react'

const Hero = () => {
  return (
    <section class="">
	<div class="container-fluid">    
    <div class="row togs" style="padding-left: 3%; background-image: url('images/back.png'); background-size: contain; background-attachment: fixed;  ">
              <div class="col-md-2 mini-nav-div"><a class="mini-nav" id="checking" href="javascript:void(0);"><span class="mini-nav-span checking"><big>Checking</big></span></a></div>
              <div class="col-md-2 mini-nav-div"><span class="mini-nav-span savings"><a id="savings" class="mini-nav" href="javascript:void(0);"><big>Savings</big></a></span></div>
              <div class="col-md-2 mini-nav-div"><span class="mini-nav-span credit-card"><a id="credit-card" class="mini-nav" href="javascript:void(0);"><big>Credit Cards</big></a></span></div>
              <div class="col-md-2 mini-nav-div"><span class="mini-nav-span home-loan"><a class="mini-nav" id="home-loan" href="javascript:void(0);"><big>Business Loans</big></a></span></div>
              <div class="col-md-2 mini-nav-div"><span class="mini-nav-span auto-loan"><a class="mini-nav" id="auto-loan" href="javascript:void(0);"><big>Auto Loans</big></a></span></div>
              <div class="col-md-2 mini-nav-div"><span class="mini-nav-span investing"><a class="mini-nav" id="investing" href="javascript:void(0);"><big>Investing</big></a></span></div>
    </div>
  <!-- beginning of toggler -->
    <!--beginning of checking -->
    <div id="checking2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>From working for your money to making your money work for you! With Performance Checking at Standard Unity Finance Bank you get to experience the full benefit of credit union membership. What do you have to do to qualify? Simply have a recurring direct deposit of $500 or more monthly. Business owners that do not have direct deposit can qualify by having their business account at Standard Unity Finance Bank.</big><br><br>
         <button class="btn blue-button">Explore checking solutions</button>
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px"><big><ul style="list-style: none; font-family: Roboto Slab">
            <li><span class="fa fa-caret-right"></span> Free Official CU checks</li>
            <li><span class="fa fa-caret-right"></span> Unlimited ATM refunds nationwide</li>
            <li><span class="fa fa-caret-right"></span> Free Instant Issue Debit Card (upon opening a checking account for all qualifying owners)</li>
            <li><span class="fa fa-caret-right"></span> 0.30% added to qualifying certificates</li>
          </ul></big>

        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>PERFORMANCE CHECKING<sup>®</sup></small><br>
              <div><img style="width: 100%" src="images/oldies.png" alt="images"></div>
              <br>
             

            </div>
        </div>
    </div>
    </div>
    <!-- end of checking -->

    <!-- beginning of savings -->
    <div id="savings2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>A credit union savings account can help you make the most of your savings. Once you have established your savings account, you are then eligible for any other service the credit union offers.</big><br><br>
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px">
          

             <big><ul style="list-style: none; font-family: Roboto Slab">
            <li><span class="fa fa-caret-right"></span> Money Market</li>
            <li><span class="fa fa-caret-right"></span> Child Savings</li>
            <li><span class="fa fa-caret-right"></span> iSAVES</li>
            <li><span class="fa fa-caret-right"></span> IRAs</li>
          </ul></big>

        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>SAVINGS<sup>®</sup></small><br>
              <div><img style="width: 100%" src="images/toggler1.jpeg" alt="images"></div>
              <br>
             <big><a href="javascript:void(0);" class="btn btn-sm blue-button-solid">Don't wait to apply <small><span class="fa fa-chevron-right"></span></small></a></big>

            </div>
        </div>
    </div>
    </div>
    <!-- end of savings -->

    <!-- beginning of credit-card -->
    <div id="credit-card2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>Find the perfect credit card <br>from among our most<br>popular options</big><br><br>
         <button class="btn blue-button">Shop all credit cards</button>
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px">

          <big><ul style="list-style: none; font-family: Roboto Slab">
            <li><span class="fa fa-caret-right"></span> Advantage Visa as low as 9.95%* APR</li>
            <li><span class="fa fa-caret-right"></span> No Annual Fee</li>
            <li><span class="fa fa-caret-right"></span> ATM Access</li>
            <li><span class="fa fa-caret-right"></span> Low Annual Rate</li>
          </ul></big>

        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>FIND A CREDIT CARD QUICKLY</small><br>
              <div><img style="width: 100%" src="images/toggler2.jpg" alt="images"></div>
              <br>
              <big><a href="javascript:void(0);" class="btn btn-sm blue-button-solid">Don't wait to apply <small><span class="fa fa-chevron-right"></span></small></a></big>

            </div>
        </div>
    </div>
  </div>
    <!-- end of credit-card -->

    <!-- beginning of home-loan -->
    <div id="home-loan2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>There are many reasons for our business members to get a commercial loan. Whether it’s purchasing new equipment, purchasing a new building or expanding your current business location through construction of a new building, we are here to help our business members in any way that we can. That’s why our loan program is designed to be flexible enough to suit any of our member’s business needs</big><br><br>
         
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px"><big><ul style="list-style: none; font-family: Roboto Slab">
            <li><span class="fa fa-caret-right"></span> Collateral Loans (Equipment and Vehicles)</li>
            <li><span class="fa fa-caret-right"></span> Rental Investment Properties (Non-Owner Occupied)</li>
            <li><span class="fa fa-caret-right"></span> Commercial Real Estate Loans</li>
          </ul></big>

        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>BUSINESS LOANS<sup>®</sup></small><br>
              <div><img style="width: 100%" src="images/toggler3.png" alt="images"></div>
              <br>
             <big><a href="javascript:void(0);" class="btn btn-sm blue-button-solid">Don't wait to apply <small><span class="fa fa-chevron-right"></span></small></a></big>

            </div>
        </div>
    </div>
   </div>
    <!-- end of home-loan -->

    <!-- beginning of auto-loan -->
    <div id="auto-loan2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>Selecting the right auto loan is as important as finding just what you want in a car or truck.</big><br><br>
         <button class="btn blue-button">Learn More</button>
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px"><big>
          <a href="javascript:void(0);">Apply now</a></big>
          <br><br>
          <big><ul style="list-style: none; font-family: Roboto Slab">
            <li><span class="fa fa-caret-right"></span> Low Auto Loan Rates- Call Us For Rates</li>
            <li><span class="fa fa-caret-right"></span> Automatic Payment Options</li>
            <li><span class="fa fa-caret-right"></span> Free online account access</li>
            <li><span class="fa fa-caret-right"></span> Refinance your current auto loan from another financial institution</li>
          </ul></big>
          
        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>AUTO LOANS<sup>®</sup></small><br>
              <div><img style="width: 100%" src="images/oldies.png" alt="images"></div>
              <br>
              <big><a href="javascript:void(0);" class="btn btn-sm blue-button-solid">Don't wait to apply <small><span class="fa fa-chevron-right"></span></small></a></big>

            </div>
        </div>
    </div>
</div>
    <!-- end of auto-loan -->

    <!-- beginning of investing -->
    <div id="investing2" style="padding-bottom: 2px; background-color: #f2f2f2; display: none;">
    <div class="row" style="font-family: 'Roboto Condensed', sans-serif;  padding-left: 4%; padding-top: 2%;">
        <div class="col-md-4" style="padding-bottom: 2px"><big>Enjoy an outstanding investing <br>experience with Standard Unity Finance Bank®</big><br><br>
         <button class="btn blue-button">See how</button>
          </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-bottom: 2px"><big>
          <a href="javascript:void(0);">Retirement Planning</a></big>
          <br><br>
          <big><a href="javascript:void(0);">IRAs and 504(k) Rollovers</a></big>
          <br><br>
          <big><a href="javascript:void(0);">754 College Savings Plans</a></big>
          <br><br>
          <big><a href="javascript:void(0);">Investment Choices</a></big>

        </div>
        <div class="col-md-4" style="font-family: 'Roboto Condensed', sans-serif; padding-right: 10%; padding-bottom: 2px">
          <div class="" style="background-color: #fff; padding : 5%;"><small>Investing<sup>®</sup></small><br>
              <div><img style="width: 100%" src="images/oldies.png" alt="images"></div>
              <br>
              <big><a href="javascript:void(0);" class="btn btn-sm blue-button-solid">Don't wait to apply <small><span class="fa fa-chevron-right"></span></small></a></big>
             

            </div>
        </div>
    </div>
  </div>
    <!-- end of investing
  <!-- end of toggler -->

		<div class="row" style="padding-left: 3.5%; padding-right: 3%; margin-top: 2%; padding-bottom: 3%; background-image: url('images/back.png'); background-size: contain; background-attachment: fixed;">
			<div class="col-md-3">
			   <div style="background-color: #016696 ; padding: 4% 4% 4px 4%">
            <div>
                  
              <h5 style="color: #fff; font-family: Roboto Condensed, sans-serif; padding: 5px;">ONLINE BANKING LOGIN</h5>
              <form method="POST" action="inc/process_login.php" class="form" role="form">
                <div><input style="border-radius: 0px; font-family: 'Roboto Condensed', sans-serif; font-weight: bold" type="email" name="email" placeholder="Email" class="form-control"></div><br>
                <div><input style="border-radius: 0px; font-family: 'Roboto Condensed', sans-serif; font-weight: bold" type="password" name="password" placeholder="Password" class="form-control"></div>
                <br>
                <label class="fancy-checkbox">
                <input type="checkbox" name="remember" value="checked"><span style="font-family: 'Roboto Condensed', sans-serif; color: #fff;"><small>Remember Me</small></span></label>
                <br>
                <button type="submit" name="submit" class="btn btn-remember red-button-solid">Sign In</button>
                <br>
                <a href="forget.php" style="color: #fff; font-weight: lighter; letter-spacing: 1px"><small>Forgot Password?</small></a>
                <br><a href="help.php" style="color: #fff; font-weight: lighter; letter-spacing: 1px"><small>Need Help?</small></a>
                
              </form>

                          </div>   
         </div>
         <div style="background-color: #4682B4; text-align: center; font-weight: lighter; padding: 2%; color: #fff;"><a style="color: #fff; text-decoration: underline; font-family: 'Roboto Slab', sans-serif;" href="openaccount.php">Online Enrollment</a>
         </div>
          <br>
        <div>
          <div style="background-color: #0073CF;; color: #fff; padding: 3% 3% 3% 8%"><span style="float: left" class="fa fa-map-marker fa-2x"></span> <div style="font-weight: lighter;">&nbsp; <a href="javascript:void(0);" style="color: #fff; font-family: Roboto Slab, sans-serif;">Find your nearest ATM/SERVICE CENTERS</a></div></div>
         
        </div>
			</div>

      <div class="col-md-9">
        ﻿
    <!-- #region Jssor Slider Begin -->
    <!-- Generator: Jssor Slider Maker -->
    <!-- Source: https://www.jssor.com -->
    <!-- <script src="js/jquery-1.11.3.min.js" type="text/javascript"></script> -->
    <!-- <script src="../plugins/jquery/dist/jquery.min.js"></script> -->
    
    
    <div id="jssor_1" style="position: relative; margin: 0px auto; top: 0px; left: 0px; width: 420px; height: 162.857px; overflow: hidden; visibility: visible;" data-jssor-slider="1">
        <!-- Loading Screen -->
        
        <div style="position: absolute; display: block; top: 0px; left: 0px; width: 420px; height: 162.857px;"><div style="position: absolute; display: block; top: -108.571px; left: -280px; width: 980px; height: 380px; transform: scale(0.429);"><div data-u="slides" style="cursor: default; position: absolute; top: 0px; left: 0px; width: 980px; height: 380px; overflow: hidden; margin: 0px; padding: 0px; transform-style: flat; z-index: 0; pointer-events: none;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; z-index: 0;"></div></div><div data-u="slides" style="cursor: default; position: absolute; top: 0px; left: 0px; width: 980px; height: 380px; overflow: hidden; margin: 0px; padding: 0px; transform-style: flat; z-index: 0;">
            <div style="top: -380px; left: 0px; width: 980px; height: 380px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;"><img data-u="image" src="vertical-slider.slider.jquery/img/002.jpg" border="0" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; max-width: 10000px; z-index: 1;" data-events="auto" data-display="block"></div><div data-events="auto" data-display="block" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;">
                
                <!-- <div style="position:absolute;top:57px;left:92px;width:400px;height:250px;font-size:16px;color:#ffffff;line-height:1.88;text-align:left;padding:10px 10px 10px 10px;box-sizing:border-box;background-color:rgba(255,188,5,0.8);background-clip:padding-box;">Settings <br /><br />
                    Layout -> Slide -> Orientation: Vertical<br /> 
                    Options -> Drag -> Orientation: Vertical
                </div> -->
            </div></div>
            <div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;"><img data-u="image" src="vertical-slider.slider.jquery/img/005.jpg" border="0" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; max-width: 10000px; z-index: 1;" data-events="auto" data-display="block"></div><div data-events="auto" data-display="block" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;">
                
            </div></div>
            <div style="top: 380px; left: 0px; width: 980px; height: 380px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;"><img data-u="image" src="vertical-slider.slider.jquery/img/003.jpg" border="0" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; max-width: 10000px; z-index: 1;" data-events="auto" data-display="block"></div><div data-events="auto" data-display="block" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;">
                
            </div></div>
            <div style="top: -380px; left: 0px; width: 980px; height: 380px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;"><img data-u="image" src="vertical-slider.slider.jquery/img/001.jpg" border="0" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; max-width: 10000px; z-index: 1;" data-events="auto" data-display="block"></div><div data-events="auto" data-display="block" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;">
                
            </div></div>
            <div style="top: -380px; left: 0px; width: 980px; height: 380px; position: absolute; overflow: hidden; transform-style: flat; z-index: 1;"><div style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; overflow: hidden; background-color: rgba(0, 0, 0, 0); background-image: none;"><img data-u="image" src="vertical-slider.slider.jquery/img/004.jpg" border="0" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; max-width: 10000px; z-index: 1;" data-events="auto" data-display="block"></div><div data-events="auto" data-display="block" style="top: 0px; left: 0px; width: 980px; height: 380px; position: absolute; display: block; transform-style: preserve-3d; z-index: 1;">
                
            </div></div>
       
        </div></div></div>
        <!-- Bullet Navigator -->
        <div style="position: absolute; display: block; top: 48.6958px; right: 6.35622px; width: 7.85584px; height: 65.4654px;"><div data-u="navigator" class="jssorb031" style="position: absolute; right: 12px; width: 12px; height: 100px; top: -17.2673px; left: -2.07208px; transform: scale(0.654654);" data-autocenter="2" data-scale="0.5" data-scale-right="0.75"><div data-u="prototype" class="i" style="width: 12px; height: 12px; position: absolute; left: 0px; top: 0px;" data-jssor-button="1">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div><div data-u="prototype" class="i iav" style="width: 12px; height: 12px; position: absolute; left: 0px; top: 22px;" data-jssor-button="1">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div><div data-u="prototype" class="i" style="width: 12px; height: 12px; position: absolute; left: 0px; top: 44px;" data-jssor-button="1">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div><div data-u="prototype" class="i" style="width: 12px; height: 12px; position: absolute; left: 0px; top: 66px;" data-jssor-button="1">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div><div data-u="prototype" class="i" style="width: 12px; height: 12px; position: absolute; left: 0px; top: 88px;" data-jssor-button="1">
                <svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div></div></div>
    </div>
    <!-- #endregion Jssor Slider End -->

      </div>
		</div>

    <div class="row">
      <div class="col-md-12" style=" background-color: #f2f2f2">
        <div style=" padding: 5%;">
          <div style="background-color: #f2f2f2; ">
             <div><h2 id="heas" style="color: #DC1431; text-align: center; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;"><big><small>Which Credit Card is best for you?</small></big></h2></div><br>
        <div class="row">

          <div class="col-md-4">
            <div style="text-align: center; ">
              <h4 style="color: #50748a; line-height: 1.25em; font-weight: 400; font-family: 'Slabo 13px', serif;">Rewards Card</h4>
              <div>
                <div><img src="images/reward.png" alt="reward" style="width: 220px"></div>
                <span>
                  <a href="javascript:void(0)" style="font-family: Roboto Slab, sans-serif;"><big>10.59% - 16.59% APR*<br>on all purchases&gt;</big></a>
                </span>
                <p style="color: #FFD700;">
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star-o fa-2x"></span>
                </p>
                4.0/5.0 (16,524)
                <br>
                
                <ul style="font-size: 16px; font-family: Roboto Slab, sans-serif; color: #000">
                  <li><b>*</b> No annual fees</li>
                  <li><b>*</b> Card fraud protection app</li>
                  <li><b>*</b> Only a small foreign transaction fee</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div style="text-align: center;">
              <h4 style="color: #50748a; line-height: 1.25em; font-weight: 400; font-family: 'Slabo 13px', serif;">Classic Card</h4>
              <div>
                <div><img src="images/master.png" alt="master" style="width: 220px"></div>
                <span>
                  <a href="javascript:void(0)" style="font-family: Roboto Slab, sans-serif;"><big>9.20% APR* <br>on all purchases&gt;</big></a>
                </span>
                <p style="color: #FFD700;">
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star-half-full fa-2x"></span>
                </p>
                4.5/5.0 (12,585)
                <br>
                <ul style="font-size: 16px; font-family: Roboto Slab, sans-serif; color: #000">
                  <li><b>*</b> No annual fees</li>
                  <li><b>*</b> Card fraud protection app</li>
                  <li><b>*</b> Only a small foreign transaction fee</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div style="text-align: center;">
              <h4 style="color: #50748a; line-height: 1.25em; font-weight: 400; font-family: 'Slabo 13px', serif;">Platinum Card</h4>
              <div>
                <div><img src="images/platinum.png" alt="platinum" style="width: 220px"></div>
                <span>
                  <a href="javascript:void(0)" style="font-family: Roboto Slab, sans-serif;"><big>18.59% APR <br>on all purchases &gt;</big></a>
                </span>
                <p style="color: #FFD700;">
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                  <span class="fa fa-star fa-2x"></span>
                </p>
                5.0/5.0 (1,140)
                <br>
                <ul style="font-size: 16px; font-family: Roboto Slab, sans-serif; color: #000">
                  <li><b>*</b> Low $85 annual fee</li>
                  <li><b>*</b> Card fraud protection app</li>
                  <li><b>*</b> Only a small foreign transaction fee</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <br>
       
          </div>
          
        </div>
      </div>

    </div>
    <!-- <hr style="border: 1px solid #fff;"> -->
    <div class="row" style="background-color: #d1c9c0 ; padding: 5% 5% 5% 5%">
      <div class="col-md-3">
        <div style="padding: 5%;">
          <div><img style="width: 80px" src="images/emvchip.webp" alt="emvchip"></div><big style="color: #6a3433; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;">EMV Chip Cards</big>
            <p style="color: #000; font-family: Roboto Condensed, sans-serif;"><small>We've transitioned all our cards to the more secure EMV chip cards. This helps us keep our members' money more secure.</small></p>
            
              <a href="javascript:void(0);" class="blood-button-solid" id="learnmore">Learn More</a>
          </div>
      </div>

       <div class="col-md-3" id="info-div">
        <div style="padding: 5%;"><div><img style="width: auto;" src="images/icons/creditstore.svg" alt="creditstore"></div><big style="color: #DC1431; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;">Looking to improve your company’s credit?</big>
            <p style="color: #000; font-family: Roboto Condensed, sans-serif;"><small>Learn how you can improve your company’s credit score and grow your business.</small></p>
            
              <a href="javascript:void(0);" class="red-button-solid" id="learnmore">Learn More</a>
          </div>
      </div>
    
    <div class="col-md-3" id="info-div">
        <div style="padding: 5%;"><div><img style="width: 80px;" src="images/smartphone.webp" alt="smartphone"></div><big style="color: #6a3433; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;">Secure Mobile Banking</big>
            <p style="color: #000; font-family: Roboto Condensed, sans-serif;"><small>Staying on top of your bank accounts is easier than ever with mobile banking. Perfect for business owners or busy people!
          </small></p>
            
              <a href="javascript:void(0);" class="blood-button-solid" id="learnmore">Learn More</a>
          </div>
      </div>

   

    <div class="col-md-3" id="info-div">
        <div style="padding: 5%;"><div><img style="width: auto;" src="images/icons/money.svg" alt="money"></div><big style="color: #DC1431; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;">Discover Standard Unity Finance Bank for business</big>
            <p style="color: #000; font-family: Roboto Condensed, sans-serif;"><small>Explore small business banking solutions plus investment options from Standard Unity Finance Bank.</small></p>
            
              <a href="javascript:void(0);" class="red-button-solid" id="learnmore">Learn More</a>
          </div>
      </div>
    </div>

    <div style="text-align: center; color: #000; padding: 5% 5% 1% 5%"><h1 id="heas" style="color: #000 ; font-family: 'Roboto Slab', sans-serif; font-weight: lighter;">Making your money work for your financial life</h1>
           <span style="font-family: Roboto Slab, sans-serif;">Explore priorities below to get started</span>
    </div>

    <div class="row" style="padding-left: 3%; padding-right: 3%;">
      <div class="col-md-3" style=" padding-bottom: 2%; padding-top: 5%;"> <img src="images/ud1.png" alt="image" style="max-width: 100%">  
      </div>

      <div class="col-md-3" style=" padding-bottom: 2%; padding-top: 5%;"> <img src="images/ud2.png" alt="image" style="max-width: 100%">
      </div>

      <div class="col-md-3" style=" padding-bottom: 2%; padding-top: 5%;"> <img src="images/ud3.png" alt="image" style="max-width: 100%">
        
      </div>

    <div class="col-md-3" style=" padding-bottom: 2%; padding-top: 5%;"> <img src="images/ud4.png" alt="image" style="max-width: 100%">
      </div>
    </div>

    <div style="text-align: center; color: #000; padding: 5% 5% 1% 5%">
           <p>See Our Financial Center Locations</p>
           <button class="btn btn-primary red-button-solid">More About Us<sup>®</sup></button>
    </div>

    <div style="text-align: center; color: #000; padding: 4%"><h1 id="heas" style="color: #DC1431 ; font-family: 'Roboto Condensed', sans-serif; font-weight: lighter;">We Strive to Provide the Best Service</h1>
      </div>

  <div class="container" style="padding-bottom: 3%">
    <div class="row">
      <div class="col-md-7" style="padding-bottom: 10px">
          <div><h1 id="heas" style="color: #016696 ; font-family: 'Roboto Condensed', sans-serif; font-weight: lighter;">Our Online Banking is Secured!</h1>
            <hr style="border: 2px solid #e2e2e2; width: 20%; float: left;">
            <p style="clear: both; font-family: Roboto Slab, sans-serif;"><big>Both are certified for providing</big><br><big style="color: grey; font-weight: bold; font-family: Roboto Condensed, sans-serif;, font-style: italic!important;"><i>“An Excellent User Experience”</i></big></p>      
            <button class="blue-button">Check it out</button>
          </div>
      </div>
    
      <div class="col-md-5" style=" padding: 7% 5% 100px 5%">
        <img src="images/alliancecredited.png" style="max-width: 100%">
      </div>
    </div>
  </div>

	</div>
</section>
  )
}

export default Hero