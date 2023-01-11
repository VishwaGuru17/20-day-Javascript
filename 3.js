// maximum possible length of the third
    // side of the given triangle
    function find_length(s1 , s2)
    {
 
        
        if (s1 <= 0 || s2 <= 0)
        {
            document.write(-1);
            return;
        }
        var max_length = s1 + s2 - 1;
        var min_length = Math.max(s1, s2) - Math.min(s1, s2) + 1;
 
       
        if (min_length > max_length)
        {
            document.write(-1);
            return;
        }
 
        document.write("Max = " + max_length+"<br/>");
        document.write("Min = " + min_length);
    }
 
    
    var s1 = 8, s2 = 5;
    find_length(s1, s2);