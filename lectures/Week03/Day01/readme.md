## Flexbox

### So why use it and how?
- Like we learned with the box model, every element in your HTML doc is a box.  Each box can contain more boxes and so on and so forth.  When it comes to using flex 1st understanding what will be effected is important.

- Here we see our box model the element content is what we are focusing on now...we know that paddings, borders, and margins affect the elements but what about when those elements contain children.

![](https://i.imgur.com/01GvHkx.png)

- Our flex container here is our element content.  So we are inside our box now.  In this case our content or box has 3 smaller boxes contained inside.  
![](https://i.imgur.com/VmNzkFF.png)


- Lets do some pseudocode using a school.  
```
<school>
    <scienceRoom>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
    </scienceRoom>
    <englishRoom>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
        <desk></desk>
    </englishRoom>
</school>
```
So we have this school with 2 rooms in it.  The school it's self being a box will have it's own padding, border, and margin to it. and as will each and every other element listed. By default html reads top to bottom, meaning as it is written right now everything will line up in 1 column on the left.

But along with our HTML we were given the following blueprint:

![](https://i.imgur.com/xWYYA3s.png)

Looking at this and the code above  and knowing the default properties we have some changes to make. 

- 1st we need to tell our code to use flex so we will apply that too the school element, which will tell the children of school how to behave:
```
school {
    display: flex;
}
```
- By default this has the properties of row but just to make sure lets make sure it's in there: 
```
school {
    display: flex;
    flex-direction: row;
}
```
- Ok better.  Now from the blueprint we see that the children of school seem to be centered in the school.  So lets add that:
```
school {
    display: flex;
    flex-direction: row;
    justify-content: center;  // This centers along the horizontal axis
    align-items: center; // This centers along the vertical axis
}
```
Ok so if we were to look at our page we would have our school and 2 rooms next to each other each with 6 desks in a column.

- Next we will need to apply some flex styling to the rooms themselves. We will just add the code for the englishRoom for now but assume we are doing it to the 2 rooms.
```
englishRoom {
    display: flex;
}
```
- Ok so now we have all 6 desks in a single row instead of a column because remember display: flex; has a default of row.  Although we do want the desks in a row we dont' want them in 1 row but 2 in this case.  With out changing the HTML we can accomplish this using flex
- 1st lets go ahead and center these desks in the room:
```
englishRoom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
```
- Ok thats done, now because of the size of our screen we have some left and right scrolling going on and thats not good.  So to stop some of that we should give the rooms a width, but that still won't fix our desks.  However allowing those desks to wrap would so lets do that:
```
englishRoom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 400px; // This makes it so they are the same width and a bit smaller
    flex-wrap: wrap; // Allows elements that don't fit to move to the next line
}
```
So now if we have this page pulled up it should look like the blueprint.