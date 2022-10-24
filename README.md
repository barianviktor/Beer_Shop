As the usual npm i to install all the missing dependencies;

I created some skelton 💀 loading items when the application loads for better user experience, so here and there i added additional delays to the http calls.

I tried implementing Darias Design, and created many small components, unfortionetly didn't have time left to implement mobile compatibility.

I wrote some tests for the services but could do more in the future.

I tried programing as reactivly as i could and only manually subscribe where there was no way to use the async pipe.

Since there was no way to filter the api by styles and methods i used the hops and malts.

Since you could not filter the beers by contributor i modified the request
-one time you need to filter only by contributor, i created the http call but it returns a default [beer1, beer2,beer3...] object and i used that.
-one time you need to filter by contributor and by abv percentage, i created the right http call but it only filters by abv percentage.

I made separate modules for each use case of the website and a shared module for commonly used components.

In the future i would give more thought about what component needs to be a Smart Component and what needs to be a Presentational Component
