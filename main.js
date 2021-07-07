var images =
["https://image.shutterstock.com/image-vector/big-family-on-white-background-260nw-432310756.jpg"];
                                                                                                  

var names = 
["Family Book", "Harsh Sharma", "Harendra Sharma", "Puja Sharma", "Harsha Sharma", "Aashna Sharma", "Aashka Sharma"];

var i = 0;
function update() 
{
i++;
var numbers_of_family_array = 6;
if( i> numbers_of_family_array)
{
    i = 0;

}
var updatedImages=images[i];
var upadatedNames = names[i];
document.getElementById("family_member_image").src = updatedImages;
document.getElementById("family_member_name").src = upadatedNames;

}
                                                                                                                                  