function Area(length, width)
{
    // Make sure not negatives are given...!!!!
    if(length < 0 || width < 0)
    {
        throw new RangeError ("Area cannot be a negative")
    }
    
    let area = length * width;
    console.log("Area of a rectangle is: " + area);
}

// Area(-31500, -40000);
Area(31500, 40000);