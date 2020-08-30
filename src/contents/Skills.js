import React, { Component } from 'react'
import Graph from 'vis-react';

var highlightActive = false;

// parsing and collecting nodes and edges from the python

const groupFont = {
    1: {"size": 35, "color": "white"},
    2: {"size": 30, "color": "white"},
    3: {"size": 20, "color": "white"}
}

const groupFontSelected = {
    1: {"size": 45, "color": "black"},
    2: {"size": 40, "color": "black"},
    3: {"size": 35, "color": "black"}
}

var graph = {
    nodes : [{"group": 1, "id": "Data Science", "label": "Data Science", "shape": "dot"}, {"group": 3, "id": "Topological Data Analysis", "label": "Topological Data Analysis", "shape": "dot"}, {"group": 2, "id": "Regularization", "label": "Regularization", "shape": "dot"}, {"group": 2, "id": "Dimensionality Reduction", "label": "Dimensionality Reduction", "shape": "dot"}, {"group": 2, "id": "Databases", "label": "Databases", "shape": "dot"}, {"group": 2, "id": "Python", "label": "Python", "shape": "dot"}, {"group": 2, "id": "R", "label": "R", "shape": "dot"}, {"group": 2, "id": "Visualization", "label": "Visualization", "shape": "dot"}, {"group": 2, "id": "Feature Selection", "label": "Feature Selection", "shape": "dot"}, {"group": 1, "id": "Mathematics", "label": "Mathematics", "shape": "dot"}, {"group": 2, "id": "Topology", "label": "Topology", "shape": "dot"}, {"group": 2, "id": "Statistics", "label": "Statistics", "shape": "dot"}, {"group": 2, "id": "Algebra", "label": "Algebra", "shape": "dot"}, {"group": 2, "id": "Discrete Mathematics", "label": "Discrete Mathematics", "shape": "dot"}, {"group": 2, "id": "Geometry", "label": "Geometry", "shape": "dot"}, {"group": 1, "id": "Systems Administration", "label": "Systems Administration", "shape": "dot"}, {"group": 2, "id": "Linux", "label": "Linux", "shape": "dot"}, {"group": 2, "id": "Containers", "label": "Containers", "shape": "dot"}, {"group": 2, "id": "GitLab Pipelines", "label": "GitLab Pipelines", "shape": "dot"}, {"group": 1, "id": "Software Engineering", "label": "Software Engineering", "shape": "dot"}, {"group": 2, "id": "Imperative", "label": "Imperative", "shape": "dot"}, {"group": 2, "id": "Git", "label": "Git", "shape": "dot"}, {"group": 2, "id": "Declarative", "label": "Declarative", "shape": "dot"}, {"group": 2, "id": "OOP", "label": "OOP", "shape": "dot"}, {"group": 2, "id": "API", "label": "API", "shape": "dot"}, {"group": 2, "id": "Web Development", "label": "Web Development", "shape": "dot"}, {"group": 2, "id": "Functional", "label": "Functional", "shape": "dot"}, {"group": 1, "id": "Computer Networks", "label": "Computer Networks", "shape": "dot"}, {"group": 3, "id": "MikroTik", "label": "MikroTik", "shape": "dot"}, {"group": 3, "id": "Wireless Networking", "label": "Wireless Networking", "shape": "dot"}, {"group": 3, "id": "IPSec", "label": "IPSec", "shape": "dot"}, {"group": 3, "id": "Linux Networking", "label": "Linux Networking", "shape": "dot"}, {"group": 3, "id": "TCP/IP", "label": "TCP/IP", "shape": "dot"}, {"group": 3, "id": "RouterOS", "label": "RouterOS", "shape": "dot"}, {"group": 3, "id": "OSI Reference Model", "label": "OSI Reference Model", "shape": "dot"}, {"group": 3, "id": "WireGuard", "label": "WireGuard", "shape": "dot"}, {"group": 3, "id": "C", "label": "C", "shape": "dot"}, {"group": 3, "id": "High-Dimensional Manifolds", "label": "High-Dimensional Manifolds", "shape": "dot"}, {"group": 3, "id": "Simplicial Homology", "label": "Simplicial Homology", "shape": "dot"}, {"group": 3, "id": "SQL", "label": "SQL", "shape": "dot"}, {"group": 3, "id": "Cypher", "label": "Cypher", "shape": "dot"}, {"group": 3, "id": "SciKitLearn", "label": "SciKitLearn", "shape": "dot"}, {"group": 3, "id": "PyTorch", "label": "PyTorch", "shape": "dot"}, {"group": 3, "id": "pandas", "label": "pandas", "shape": "dot"}, {"group": 3, "id": "NumPy", "label": "NumPy", "shape": "dot"}, {"group": 3, "id": "Flask", "label": "Flask", "shape": "dot"}, {"group": 3, "id": "SciPy", "label": "SciPy", "shape": "dot"}, {"group": 3, "id": "TensorFlow", "label": "TensorFlow", "shape": "dot"}, {"group": 3, "id": "Algebraic Geometry", "label": "Algebraic Geometry", "shape": "dot"}, {"group": 3, "id": "Vector Spaces", "label": "Vector Spaces", "shape": "dot"}, {"group": 3, "id": "Graph Theory", "label": "Graph Theory", "shape": "dot"}, {"group": 3, "id": "Algebraic Topology", "label": "Algebraic Topology", "shape": "dot"}, {"group": 3, "id": "X Server", "label": "X Server", "shape": "dot"}, {"group": 3, "id": "GRUB2", "label": "GRUB2", "shape": "dot"}, {"group": 3, "id": "SystemCTL", "label": "SystemCTL", "shape": "dot"}, {"group": 3, "id": "Probability Theory", "label": "Probability Theory", "shape": "dot"}, {"group": 3, "id": "Haskell", "label": "Haskell", "shape": "dot"}, {"group": 3, "id": "Mathematica", "label": "Mathematica", "shape": "dot"}, {"group": 3, "id": "GraphQL", "label": "GraphQL", "shape": "dot"}, {"group": 3, "id": "RESTful", "label": "RESTful", "shape": "dot"}, {"group": 3, "id": "PCA", "label": "PCA", "shape": "dot"}, {"group": 3, "id": "Kernel PCA", "label": "Kernel PCA", "shape": "dot"}, {"group": 3, "id": "Autoencoder", "label": "Autoencoder", "shape": "dot"}, {"group": 3, "id": "noSQL", "label": "noSQL", "shape": "dot"}, {"group": 3, "id": "Neo4j", "label": "Neo4j", "shape": "dot"}, {"group": 3, "id": "Postgres", "label": "Postgres", "shape": "dot"}, {"group": 3, "id": "Dgraph", "label": "Dgraph", "shape": "dot"}, {"group": 3, "id": "MariaDB", "label": "MariaDB", "shape": "dot"}, {"group": 3, "id": "Bayesian", "label": "Bayesian", "shape": "dot"}, {"group": 3, "id": "Multivariate Statistics", "label": "Multivariate Statistics", "shape": "dot"}, {"group": 3, "id": "Frequentist", "label": "Frequentist", "shape": "dot"}, {"group": 3, "id": "Bias-Variance Tradeoff", "label": "Bias-Variance Tradeoff", "shape": "dot"}, {"group": 3, "id": "MLE", "label": "MLE", "shape": "dot"}, {"group": 3, "id": "MAP", "label": "MAP", "shape": "dot"}, {"group": 3, "id": "Keras", "label": "Keras", "shape": "dot"}, {"group": 3, "id": "Generalized Linear Models", "label": "Generalized Linear Models", "shape": "dot"}, {"group": 3, "id": "ggplot2", "label": "ggplot2", "shape": "dot"}, {"group": 3, "id": "networkD3", "label": "networkD3", "shape": "dot"}, {"group": 3, "id": "data.tree", "label": "data.tree", "shape": "dot"}, {"group": 3, "id": "Oracle/Matlab", "label": "Oracle/Matlab", "shape": "dot"}, {"group": 3, "id": "C++", "label": "C++", "shape": "dot"}, {"group": 3, "id": "Java", "label": "Java", "shape": "dot"}, {"group": 3, "id": "FCBF (Filter)", "label": "FCBF (Filter)", "shape": "dot"}, {"group": 3, "id": "Wrapper Methods", "label": "Wrapper Methods", "shape": "dot"}, {"group": 3, "id": "Random Forest Classifiers", "label": "Random Forest Classifiers", "shape": "dot"}, {"group": 3, "id": "Kubernetes", "label": "Kubernetes", "shape": "dot"}, {"group": 3, "id": "NodeJS", "label": "NodeJS", "shape": "dot"}, {"group": 3, "id": "Docker", "label": "Docker", "shape": "dot"}, {"group": 3, "id": "JavaScript", "label": "JavaScript", "shape": "dot"}, {"group": 3, "id": "Differential Geometry", "label": "Differential Geometry", "shape": "dot"}, {"group": 3, "id": "Confidence Intervals", "label": "Confidence Intervals", "shape": "dot"}, {"group": 3, "id": "Lp Norms", "label": "Lp Norms", "shape": "dot"}, {"group": 3, "id": "Hypothesis Testing", "label": "Hypothesis Testing", "shape": "dot"}, {"group": 3, "id": "Method of Moments", "label": "Method of Moments", "shape": "dot"}, {"group": 3, "id": "Maximum Likelihood Estimation", "label": "Maximum Likelihood Estimation", "shape": "dot"}, {"group": 3, "id": "Dirichlet Tree Priors", "label": "Dirichlet Tree Priors", "shape": "dot"}, {"group": 3, "id": "Linear Algebra", "label": "Linear Algebra", "shape": "dot"}, {"group": 3, "id": "Complex Space", "label": "Complex Space", "shape": "dot"}],
    edges: [{"from": "Data Science", "to": "Topological Data Analysis" }, {"from": "Data Science", "to": "Regularization" }, {"from": "Data Science", "to": "Dimensionality Reduction" }, {"from": "Data Science", "to": "Databases" }, {"from": "Data Science", "to": "Python" }, {"from": "Data Science", "to": "R" }, {"from": "Data Science", "to": "Visualization" }, {"from": "Data Science", "to": "Feature Selection" }, {"from": "Mathematics", "to": "Topology" }, {"from": "Mathematics", "to": "Statistics" }, {"from": "Mathematics", "to": "Algebra" }, {"from": "Mathematics", "to": "Discrete Mathematics" }, {"from": "Mathematics", "to": "Geometry" }, {"from": "Systems Administration", "to": "Linux" }, {"from": "Systems Administration", "to": "Databases" }, {"from": "Systems Administration", "to": "Containers" }, {"from": "Systems Administration", "to": "GitLab Pipelines" }, {"from": "Software Engineering", "to": "Imperative" }, {"from": "Software Engineering", "to": "Git" }, {"from": "Software Engineering", "to": "Declarative" }, {"from": "Software Engineering", "to": "OOP" }, {"from": "Software Engineering", "to": "API" }, {"from": "Software Engineering", "to": "Web Development" }, {"from": "Software Engineering", "to": "Functional" }, {"from": "Computer Networks", "to": "MikroTik" }, {"from": "Computer Networks", "to": "Wireless Networking" }, {"from": "Computer Networks", "to": "IPSec" }, {"from": "Computer Networks", "to": "Linux Networking" }, {"from": "Computer Networks", "to": "TCP/IP" }, {"from": "Computer Networks", "to": "RouterOS" }, {"from": "Computer Networks", "to": "OSI Reference Model" }, {"from": "Computer Networks", "to": "WireGuard" }, {"from": "Imperative", "to": "C" }, {"from": "Topology", "to": "High-Dimensional Manifolds" }, {"from": "Topology", "to": "Simplicial Homology" }, {"from": "Topology", "to": "Topological Data Analysis" }, {"from": "Declarative", "to": "SQL" }, {"from": "Declarative", "to": "Cypher" }, {"from": "Python", "to": "SciKitLearn" }, {"from": "Python", "to": "PyTorch" }, {"from": "Python", "to": "pandas" }, {"from": "Python", "to": "NumPy" }, {"from": "Python", "to": "Flask" }, {"from": "Python", "to": "SciPy" }, {"from": "Python", "to": "TensorFlow" }, {"from": "Algebra", "to": "Algebraic Geometry" }, {"from": "Algebra", "to": "Vector Spaces" }, {"from": "Algebra", "to": "Graph Theory" }, {"from": "Algebra", "to": "Algebraic Topology" }, {"from": "Linux", "to": "X Server" }, {"from": "Linux", "to": "Linux Networking" }, {"from": "Linux", "to": "GRUB2" }, {"from": "Linux", "to": "SystemCTL" }, {"from": "Discrete Mathematics", "to": "Probability Theory" }, {"from": "Discrete Mathematics", "to": "Graph Theory" }, {"from": "Functional", "to": "Haskell" }, {"from": "Functional", "to": "Mathematica" }, {"from": "API", "to": "GraphQL" }, {"from": "API", "to": "RESTful" }, {"from": "Dimensionality Reduction", "to": "PCA" }, {"from": "Dimensionality Reduction", "to": "Kernel PCA" }, {"from": "Dimensionality Reduction", "to": "Autoencoder" }, {"from": "Databases", "to": "SQL" }, {"from": "Databases", "to": "noSQL" }, {"from": "Databases", "to": "Neo4j" }, {"from": "Databases", "to": "Postgres" }, {"from": "Databases", "to": "Dgraph" }, {"from": "Databases", "to": "Cypher" }, {"from": "Databases", "to": "MariaDB" }, {"from": "Statistics", "to": "Bayesian" }, {"from": "Statistics", "to": "Multivariate Statistics" }, {"from": "Statistics", "to": "Frequentist" }, {"from": "Statistics", "to": "Bias-Variance Tradeoff" }, {"from": "R", "to": "MLE" }, {"from": "R", "to": "MAP" }, {"from": "R", "to": "Keras" }, {"from": "R", "to": "Generalized Linear Models" }, {"from": "R", "to": "ggplot2" }, {"from": "R", "to": "networkD3" }, {"from": "R", "to": "data.tree" }, {"from": "OOP", "to": "Oracle/Matlab" }, {"from": "OOP", "to": "C++" }, {"from": "OOP", "to": "Java" }, {"from": "Feature Selection", "to": "FCBF (Filter)" }, {"from": "Feature Selection", "to": "Wrapper Methods" }, {"from": "Feature Selection", "to": "Random Forest Classifiers" }, {"from": "Web Development", "to": "Kubernetes" }, {"from": "Web Development", "to": "NodeJS" }, {"from": "Web Development", "to": "Docker" }, {"from": "Web Development", "to": "JavaScript" }, {"from": "Web Development", "to": "Flask" }, {"from": "Geometry", "to": "Algebraic Geometry" }, {"from": "Geometry", "to": "Differential Geometry" }, {"from": "MAP", "to": "Bayesian" }, {"from": "Confidence Intervals", "to": "Frequentist" }, {"from": "Lp Norms", "to": "Vector Spaces" }, {"from": "Hypothesis Testing", "to": "Frequentist" }, {"from": "Method of Moments", "to": "Frequentist" }, {"from": "Maximum Likelihood Estimation", "to": "Frequentist" }, {"from": "Bayesian", "to": "Dirichlet Tree Priors" }, {"from": "Linear Algebra", "to": "Vector Spaces" }, {"from": "Vector Spaces", "to": "Complex Space" }]};

var options = {
    "edges": {
        "color": {"inherit": true}, 
        "smooth": false,
        "width": 2,
        "selectionWidth": function (width) {return width+2;}, 
        "hoverWidth": function (width) {return width+2;}
    },
    "groups": {
        "1": {
            "font": groupFont[1],
            "borderWidth": 3, 
            "size":40, 
            "color": {"background": "rgba(255,179,156,0.5)", "border": "rgba(255,133,193,1)"}
        },
        "2": {
            "font": groupFont[2],
            "borderWidth": 2, 
            "size": 32, 
            "color": {"background": "rgba(169,217,187,.5)", "border": "rgba(103,243,187,1)"}
        },
        "3": {
            "font": groupFont[3],
            "borderWidth": 1, 
            "size":20,
            "color": {"background": "rgba(208,192,255,0.5)", "border": "rgba(191,165,255,1)"},
            
        }
    },
    "interaction": {
        hover: true,
        hoverConnectedEdges: true,
        hoverEdges: true,
        selectable: false,
        selectConnectedEdges: false,
        zoomView: false,
        dragView: false
    },
    "physics": {
    "repulsion": {
        "centralGravity": 1,
        "springLength": 200,
        "springConstant": 0.53,
        "nodeDistance": 275,
        "damping": 0.3
    },
    "minVelocity": 0.75,
    "solver": "repulsion"
    }
};

export default class Skills extends Component {
    setState(stateObj) {
        if (this.mounted) {
          super.setState(stateObj);
        }
      }
      componentWillMount() {
        this.mounted = true;
      }
      constructor(props) {
        super(props);
        this.events = {
          select: function(event) {
            var { nodes, edges } = event;
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
          },
          hoverNode: function(event) {
            this.neighbourhoodHighlight(event, this.props.searchData);
          },
          blurNode: function(event) {
            this.neighbourhoodHighlightHide(event);
          },
          click: function(event) {
            this.redirectToLearn(event, this.props.searchData);
          }
        };
        this.state = {
          graph: graph,
          style: {width: "100vw", height: "100vh", position: "absolute", zindex: "1"},
          network: null
        };
        this.measure = this.measure.bind(this);
        this.events.hoverNode = this.events.hoverNode.bind(this);
        this.events.blurNode = this.events.blurNode.bind(this);
        this.events.click = this.events.click.bind(this);
        this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
        this.redirectToLearn = this.redirectToLearn.bind(this);
        this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(
          this
        );
      }
    
      componentDidMount() {
        this.mounted = true;
        window.addEventListener("resize", this.measure);
      }
    
      componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener("resize", this.measure);
      }
    
      measure(data) {
        console.log("measure");
        this.state.network.redraw();
        this.state.network.fit();
      }
    
      redirectToLearn(params, searchData) {
        console.log(this.state.network.getNodeAt(params.pointer.DOM));
      }
    
      neighbourhoodHighlight(params, searchData) {
        let allNodes = this.state.graph.nodes;
        // let cloneNodes = allNodes.map(a => {return {...a}});
        let Nodes = new this.vis.DataSet(allNodes);
        let cloneNodes = Nodes.get({ returnType: "Object" });
    
        this.state.network.canvas.body.container.style.cursor = "pointer";
        // this.setState({cursor});
    
        if (params.node !== undefined) {
          highlightActive = true;
          let i, j;
          let selectedNode = params.node;
          let degrees = 2;
    
          for (var nodeId in cloneNodes) {
            cloneNodes[nodeId].color = "rgba(200,200,200,0.5)";
            if (cloneNodes[nodeId].hiddenLabel === undefined) {
              cloneNodes[nodeId].hiddenLabel = cloneNodes[nodeId].label;
              cloneNodes[nodeId].label = undefined;
            }
          }
    
          let connectedNodes = this.state.network.getConnectedNodes(selectedNode, ["to", "from"]);
          let allConnectedNodes = [];
          // get the second degree nodes
          for (i = 1; i < degrees; i++) {
            for (j = 0; j < connectedNodes.length; j++) {
              allConnectedNodes = allConnectedNodes.concat(
                this.state.network.getConnectedNodes(connectedNodes[j], ["to","from"])
              );
            }
          }
    
          // all second degree nodes get their own color and their label back
          for (i = 0; i < allConnectedNodes.length; i++) {
            cloneNodes[allConnectedNodes[i]].color = undefined;
            if (cloneNodes[allConnectedNodes[i]]["hiddenLabel"] !== undefined) {
              cloneNodes[allConnectedNodes[i]].label =
                cloneNodes[allConnectedNodes[i]]["hiddenLabel"];
              const font = this.state.network.body.nodes;
              font[allConnectedNodes[i]].options.font.size = 
                groupFontSelected[cloneNodes[allConnectedNodes[i]].group].size;
              font[allConnectedNodes[i]].options.font.color = 
                groupFontSelected[cloneNodes[allConnectedNodes[i]].group].color;
              cloneNodes[allConnectedNodes[i]]["hiddenLabel"] = undefined;
            }
          }
    
          // all first degree nodes get their own color and their label back
          for (let i = 0; i < connectedNodes.length; i++) {
            cloneNodes[connectedNodes[i]].color = undefined;
            if (cloneNodes[connectedNodes[i]]["hiddenLabel"] !== undefined) {
              cloneNodes[connectedNodes[i]].label = 
                cloneNodes[connectedNodes[i]]["hiddenLabel"];
              const font = this.state.network.body.nodes;
              font[connectedNodes[i]].options.font.size = 
                groupFontSelected[cloneNodes[connectedNodes[i]].group].size;
              font[connectedNodes[i]].options.font.color = 
                groupFontSelected[cloneNodes[connectedNodes[i]].group].color;
              cloneNodes[connectedNodes[i]]["hiddenLabel"] = undefined;
            }
          }

        } else if (highlightActive === true) {
          // reset all nodes
          for (let nodeId in cloneNodes) {
            cloneNodes[nodeId].color = undefined;
            if (cloneNodes[nodeId]["hiddenLabel"] !== undefined) {
              const font = this.state.network.body.nodes;
              font[nodeId].options.font.size = 
                groupFont[cloneNodes[nodeId].group].size;
              font[nodeId].options.font.color = 
                groupFont[cloneNodes[nodeId].group].color;
              cloneNodes[nodeId]["hiddenLabel"] = undefined;
            }
          }
          highlightActive = false;
        }
    
        let updateArray = [];
        for (let nodeId in cloneNodes) {
          if (cloneNodes.hasOwnProperty(nodeId)) {
            updateArray.push(cloneNodes[nodeId]);
          }
        }
        if (this.mounted) {
          this.setState({
            graph: {
              nodes: updateArray,
              edges: this.state.graph.edges
            }
          });
        }
      }
    
      neighbourhoodHighlightHide(params) {
        let allNodes = this.state.graph.nodes;
    
        let Nodes = new this.vis.DataSet(allNodes);
        let allNodess = Nodes.get({ returnType: "Object" });
        // let allNodess = allNodes.map(a => {return {...a}})
        this.state.network.canvas.body.container.style.cursor = "default";
    
        for (var nodeId in allNodess) {
          allNodess[nodeId].color = "rgba(200,200,200,0.5)";
          if (allNodess[nodeId].hiddenLabel === undefined) {
            allNodess[nodeId].hiddenLabel = allNodess[nodeId].label;
            allNodess[nodeId].label = undefined;
          }
        }
    
        highlightActive = true;
        if (highlightActive === true) {
          // reset all nodes
          for (var nodeIds in allNodess) {
            allNodess[nodeIds].color = undefined;
            if (allNodess[nodeIds].hiddenLabel !== undefined) {
              allNodess[nodeIds].label = allNodess[nodeIds].hiddenLabel;
              const font = this.state.network.body.nodes;
              console.log(font);
              font[nodeIds].options.font.size = 
                groupFont[allNodess[nodeIds].group].size;
              font[nodeIds].options.font.color = 
                groupFont[allNodess[nodeIds].group].color;
              this.setState({ font });
              allNodess[nodeIds].hiddenLabel = undefined;
            }
          }
          highlightActive = false;
        }
    
        var updateArray = [];
        for (var nodeIde in allNodess) {
          if (allNodess.hasOwnProperty(nodeIde)) {
            updateArray.push(allNodess[nodeIde]);
          }
        }
        if (this.mounted) {
          this.setState({
            graph: {
              nodes: updateArray,
              edges: this.state.graph.edges
            }
          });
        }
      }
    
      getNetwork = data => {
        this.setState({ network: data });
      };
      getEdges = data => {
        console.log(data);
      };
      getNodes = data => {
        console.log(data);
      };
      render() {
        return (
            <Graph
              graph={this.state.graph}
              style={this.state.style}
              options={options}
              getNetwork={this.getNetwork}
              getEdges={this.getEdges}
              getNodes={this.getNodes}
              events={this.events}
              vis={vis => (this.vis = vis)}
            />
        );
      }
}
