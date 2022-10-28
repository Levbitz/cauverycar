import React from "react";
import SideBlog from "../../components/SideBlog/Sideblog";
import Navbar from "../../components/Navbar/Navbar";

function SingleBlogDetail() {
  return (
    <div
      style={{
        paddingTop: "100px",
      }}
    >
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col l9">
            <div>
              <h5>The 2020 Mercedes-AMG GLE 63 Coupe</h5>
              <small>Mar 3 • Auto Mode</small>

              <div>
                <img
                  className="responsive-img"
                  src="https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2020/03/03140242/3.jpg"
                  alt=""
                />
              </div>

              <div>
                <p>
                  Mercedes Benz launched the GLE 63 last year in November at the
                  LA Auto Show. The SUV, along with its bigger brother, the GLS
                  63, managed to attract large crowds to the Mercedes Benz
                  booth. This year, the German automaker has launched a coupe
                  version of this mid-size luxury SUV, and we just can’t seem to
                  be able to take our eyes off it. Known earlier as the M-Class,
                  this off-roader class takes its name from the German word for
                  the same, Geländewagen; the ‘E’ referring to its Executive
                  class
                </p>

                <p>
                  Beneath the bonnet, the coupe is just about the same as the
                  GLE 63 launched earlier, with AMG’s 4-litre twin turbocharged
                  V8 petrol engine being paired with a 48V starter-alternator so
                  as to provide it with an extra bit of boost in acceleration
                  and efficiency. The S version of the coupe is a bit more
                  powerful than the 571hp regular, churning out 611hp and a top
                  speed of 280 km/hr, which also allows it to reach 0-100 km/hr
                  in a mere 3.8 seconds. The hybrid helps garner an extra power
                  of about 22hp and 250Nm as and when required. All of the
                  earlier features continue with the new Coupe and its S
                  version, including the 9-speed automatic gearbox and the
                  4Matic+ four-wheel drive. Apart from the 6 driving modes
                  available in the Coupe, the S version gets an extra ‘Race’
                  mode as well.
                </p>

                <p>
                  The new GLE Coupe has been beautifully crafted, with a newer
                  grille up front, one that is leaner keeping in line with the
                  coupe design of the GLE. The prominently raked roof of the
                  Coupe differentiates it from the version launched last year as
                  well. The hood has power domes and the black air intakes,
                  exhaust pipes and 22” alloys give the exteriors a feel of both
                  power and luxury. There is an option Night package available
                  as well, which has side skirts, the front splitter, the caps
                  on the mirrors and even the window frames, all designed in
                  black.
                </p>
                <p>
                  On the inside, the GLE 63 Coupe and the S version aren’t very
                  different from the SUV released last year. A sporty steering
                  wheel, carbon-effect trim elements with bits of red lining
                  that enhance the appeal of the interiors and plush,
                  comfortable Nappa upholstery keep reminding you of the comfort
                  and class that the Mercedes AMG line brings to you, as also
                  does the conspicuously placed AMG branding.
                </p>
                <p>
                  The last GLE Coupe that was offered by Mercedes was the AMG
                  43. The latest GLE Coupe 63 is all set to launch in India as
                  well, with Mercedes-Benz India putting the news out recently.
                  While the SUV will be sold in the range of ₹73.70 lakh to
                  ₹1.25 crore (ex-showroom Delhi), the prices of the Coupe and
                  its S version are yet to be revealed. The new Mercedes AMG GLE
                  63 Coupe is awe-inspiring, attractive to look at and we just
                  can’t wait to take one out for a long, scenic drive through
                  the mountains.
                </p>
              </div>
            </div>
          </div>

          <div className="col l3">
            <SideBlog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogDetail;
