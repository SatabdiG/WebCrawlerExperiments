
var tree;

function setup()
{
tree=new Tree();
var n1=new Node(5);
var n2=new Node(3);
var n3=new Node(9);
var n4=new Node(6);
tree.addNode(n1);
console.log(tree);
tree.addNode(n2);
console.log(tree);
tree.addNode(n3);
console.log(tree);  
tree.addNode(n4);
console.log(tree);  
tree.traverse();
tree.search(5);
}



function Node(label)
{
    this.value=label;
    this.left=null;
    this.right=null;
}

function Tree()
{
    this.root=null;
}

Tree.prototype.traverse=function()
{
    this.root.visit();
}

Tree.prototype.search=function(val)
{
    this.root.search(val);
}


Tree.prototype.addNode=function(n)
{
    if(this.root == null)
    {
        this.root = n;
    }else
    {
        this.root.addNode(n);
    }
};

Node.prototype.addNode=function(n)
{
    if(n.value<this.value)
    {
        if(this.left ==  null)
        {
            this.left=n;
        }else
        {
            this.left.addNode(n)
        }
        
    }else
    {
        if(this.right == null)
        {
            this.right=n;
        }else
        {
            this.right.addNode(n);
        }
    }
}

Node.prototype.visit=function()
{
    if(this.left != null)
        this.left.visit();
        console.log(this.value);
    if(this.right != null)
        this.right.visit();

}

Node.prototype.search=function(val)
{
    if(this.value == val)
    {
        console.log("Value found"+ val);
    }
    else if(val < this.value && this.left!=null)
    {
        this.left.search(val);
    }else if(val > this.value && this.right!=null)
    {
        this.right.search(val);
    }
   
}
setup();