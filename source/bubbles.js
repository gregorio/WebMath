/* globals d3:false */

var bubbles = {
    version: '0.1.0'  // semver
};


bubbles.bubblepage = function() {

    // Chart Attributes
    var me = {
        width: 400,
        height: 400,
    };

    var width = 400
        height = 800;

    fields = [ {field:'about', label:'', size:'50', url:'about.html'},
               {field:'research', label:'',size:'70', url:'research.html'},
               {field:'teaching', label:'',size:'70',url:'teaching.html'},
               {field:'publications', label:'', size:'100', url:'publications.html'},
               {field:'probability-group', label:'',size:'60', url:'http://www.probabilidad.cl'},
               {field:'puc', label:'', size:'30', url:'http://www.uc.cl'},
               {field:'math-department', label:'', size:'40', url:'http://www.mat.puc.cl'}
    ];

    links = [
            {source:'about', target:'research'},
            {source:'research',target:'publications'},
            {source:'publications',target:'probability-group'},
            {source:'probability-group',target:'teaching'},
            {source:'teaching',target:'math-department'},
            {source:'math-department', target:'puc'}
    ];

    miscFields = [
               {field:'misc', label:'', size:'20'},
               {field:'misc', label:'', size:'15'},
               {field:'misc', label:'', size:'10'},
               {field:'misc', label:'', size:'10'},
               {field:'misc', label:'', size:'20'},
               {field:'misc', label:'', size:'15'},
               {field:'misc', label:'', size:'10'},
               {field:'misc', label:'', size:'20'},
               {field:'misc', label:'', size:'35'},
               {field:'misc', label:'', size:'25'}
    ];

    var backyard = d3.select('#demo').append('g').attr('class','web')
                        .append('svg')
                        .attr('height',height)
                        .attr('width',width);

    backyard.append('rect')
            .attr('width',width)
            .attr('height',height)
            .attr('class','background');

    var name = backyard.append('g')
                    .append('svg:image')
                    .attr("xlink:href", "name.svg")
                    .attr('x', width-370)
                    .attr('y', 2*height/3)
                    .attr("width", 400)
                    .attr("height", 200);

    var miscForce = d3.layout.force()
                    .nodes(miscFields)
                    .size([width,height])
                    .linkStrength(0.2)
                    .linkDistance(100)
                    .charge(-2000)
                    .friction(0.5)
                    .start();

    var miscBubbles = backyard.append('g').attr('class','misc-bubble')
                    .selectAll('circle.misc-bubble')
                    .data(miscForce.nodes())
                    .enter()
                    .append('circle')
                    .attr('class','misc-bubble')
                    .attr('r', function(d) { return d.size; })
                    .call(miscForce.drag);


    var force = d3.layout.force()
                    .nodes(fields)
                    .links(links)
                    .size([width,height])
                    .linkStrength(10)
                    .linkDistance(50)
                    .charge(-2000)
                    .friction(0.5)
                    .start();


    var bubbles = backyard.append('g').attr('class','bubble')
                    .selectAll('circle.bubble')
                    .data(force.nodes())
                    .enter()
                    .append('g')
                    .append('a')
                    .attr('xlink:href',function(d) { return d.url; })
                    .attr('id', function(d) { return d.field; })
                    .append('circle')
                    .attr('r', function(d) { return d.size; })
                    .attr('class', function(d) { return d.field; })
                    .call(force.drag());

    var pucBubble = d3.select('#puc')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "uc-small.svg")
                        .attr('x', function(d) { return d.x-30; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 80)
                        .attr("height", 80);

    var groupBubble = d3.select('#probability-group')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "probability-group.svg")
                        .attr('x', function(d) { return d.x-30; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 80)
                        .attr("height", 80);

    var teachingBubble = d3.select('#teaching')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "teaching.svg")
                        .attr('x', function(d) { return d.x-30; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 80)
                        .attr("height", 80);

    var researchBubble = d3.select('#research')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "research.svg")
                        .attr('x', function(d) { return d.x-30; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 80)
                        .attr("height", 80);

    var aboutBubble = d3.select('#about')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "about.svg")
                        .attr('x', function(d) { return d.x-40; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 80)
                        .attr("height", 80);

    var publicationsBubble = d3.select('#publications')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "publications.svg")
                        .attr('x', function(d) { return d.x-40; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 120)
                        .attr("height", 100);

    var mathBubble = d3.select('#math-department')
                        .append('g')
                        .append('svg:image')
                        .attr("xlink:href", "math-uc.svg")
                        .attr('x', function(d) { return d.x-40; })
                        .attr('y', function(d) { return d.y-30; })
                        .attr('x',20)
                        .attr('y',20)
                        .attr("width", 120)
                        .attr("height", 100);



    // var bubbleLabels = backyard.selectAll('text')
    //                     .data(force.nodes(), function(d) { return d.label});

    // bubbleLabels.enter().append('text')
    //             .text(function(d) { return d.label; })
    //             .attr('x', function(d, i) { return d.x - 20; })
    //             .attr('y', function(d, i) { return d.y; });


    force.on('tick', function() {

                bubbles
                    .attr('cx', function(d) { return Math.max(10, Math.min(d.x,width-30)) ; })
                    .attr('cy', function(d) { return Math.max(10, Math.min(d.y,height-10)); });

                // bubbleLabels
                //     .attr('x', function(d, i) { return d.x - 20; })
                //     .attr('y', function(d, i) { return d.y; });

                pucBubble.attr('x', function(d) { return Math.max(10, Math.min(d.x-30,width-10)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-30,height-10)); });

                groupBubble.attr('x', function(d) { return Math.max(-20, Math.min(d.x-30,width-60)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-30,height-10)); });

                teachingBubble.attr('x', function(d) { return Math.max(-20, Math.min(d.x-30,width-50)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-20,height-10)); });

                researchBubble.attr('x', function(d) { return Math.max(-20, Math.min(d.x-30,width-60)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-20,height-10)); });

                aboutBubble.attr('x', function(d) { return Math.max(-20, Math.min(d.x-35,width-65)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-20,height-10)); });

                publicationsBubble.attr('x', function(d) { return Math.max(-20, Math.min(d.x-30,width-50)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-20,height-10)); });

                mathBubble.attr('x', function(d) { return Math.max(-30, Math.min(d.x-40,width-70)); })
                         .attr('y', function(d) { return Math.max(10, Math.min(d.y-60,height-10)); });
            });

    miscForce.on('tick', function() {

                miscBubbles
                    .attr('cx', function(d) { return d.x ; })
                    .attr('cy', function(d) { return d.y; });
            });

    chart.init = function(selection) {

    };



    // Accessor Methods
    // ----------------

    // Generate Accessor Methods
    function createAccessor(attr) {
        return function(value) {
            if (!arguments.length) { return me[attr]; }
            me[attr] = value;
            return chart;
        };
    }

    for (var attr in me) {
        if ((!chart[attr]) && (me.hasOwnProperty(attr))) {
            chart[attr] = createAccessor(attr);
        }
    }

    return chart;
};