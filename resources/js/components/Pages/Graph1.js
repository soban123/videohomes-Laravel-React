import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataPie: {
              labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
              datasets: [
                {
                  data: [300, 50, 100, 40, 120],
                  backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    "#AC64AD"
                  ],
                  hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                    "#DA92DB"
                  ]
                }
              ]
            }
          }
    }
 

  render() {
    return (
        <div style={{ width:'400px' , border: '1px solid rgb(204, 199, 199)'  } }>
      <MDBContainer>
        <h3 className="mt-5">Pie chart</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
      </div>
    );
  }
}

export default ChartsPage;