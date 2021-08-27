## Project Name

# Party-On

https://api.airtable.com/v0/app8rvW4bLreZZKpo/drinks


## Project Description

Welcome to Party On!

Please enjoy our app, with all the abundance of Drink, Food, and Music suggestion. And if you have a suggestion of your own. Please, feel free to post it on our app. Now... Party On!

## API and Data Sample


     "records": [
        {
            "id": "recWtJkP1WwYlPvv1",
            "fields": {
                "Name": "Moscow Mule",
                "Ingredients": "Vodka, Lime Juice, Ginger Bear",
                "Steps": "Pour the Vodka, Lime Juice, and Ginger Beer, in a copper mug.",
                "Image": [
                    {
                        "id": "attA5uJpQwfEZSExx",
                        "width": 1080,
                        "height": 1080,
                        "url": "https://dl.airtable.com/.attachments/ceb75bdd9b525f20732b5851319113ae/39d19df9/IMG_5823-moscow-mule.jpeg",
                        "filename": "IMG_5823-moscow-mule.jpeg",
                        "size": 54579,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/.attachmentThumbnails/b408fe0cb97c1830b64d88091ec990bd/73b1f2dd",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": 
                                
                                
## Wireframes & Component Hierarchy

https://whimsical.com/party-on-Xgjw1WF2aqu6TtStqFJmzE

![image](https://user-images.githubusercontent.com/87334634/131069717-6dd94761-4852-4f35-afab-5f809ec411d2.png)


#### MVP

• REACT and CSS

• Getting the Drink Tab to show drink selection 

• Use CRUD to PUT POST AND GET info from the API

• Include Media query 

• Have at least 6 separate, rendered components.

• Utilize React Router, installed via NPM.

• Use functional components appropriately.



#### PostMVP  

• Create other tabs: Food, Music and Help

• Repeat all MVP for Food, Music, and Help

• Use CRUD on all the new tabs

• Navigation Bar

• Instant youtube video's

• Make each Tab Media query compatible


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 19-20th| Prompt / Wireframes / Timeframes / README.md / Project Approval / Project start | imcomplete
|August 23| Pseudocode / Core Application Structure / API  | complete
|August 24| Coding/ MVP Start | complete
|August 25| MVP completion/ CSS Detailing / PostMVP Start| complete
|August 26| PostMVP / CSS Fine Detailing/ Last minute Update | complete
|August 27| Presentations | complete




### Goal

Create an app. That can show two different screen sizes. Both desktop and tablets. All still giving info from the API for topics. Food, Drinks, and Music.
Allowing the user to recieve, post, and delete info.



## Timeframes-----

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling CSS | H | 4hrs | 6hrs | 6hrs |
| APP page | H | 4hrs | 4hrs | 4hrs |
| Route and Link | H | 2hrs| 2hrs | 2hrs |
| useState and useEffect | H | 2hrs | 3hrs | 3hrs |
| Adding Grid and Flexbox| H | 4hrs | 2hrs | 2hrs |
| Youtube Video | H | 3hrs | 4hr | 4hrs |
| Drink Tab | H | 3hrs | 4hr | 4hrs |
| Food Tab | H | 3hrs | 3hrs | 3hrs |
| Music Tab | H | 3hrs | 2hrs | 2hrs |
| Help Page | H | 1hrs | 1hrs | 1hrs |
| Media Query | H | 1hrs | 2hrs | 2hrs |
| Final CSS Detailing | H | 2hrs | 2hrs | 2hrs |
| NavBar | H | 2hrs | 2hrs | 2hrs |
| Event Listeners | H | 2hrs | 2hrs | 2hrs |
| Total | H | 37hrs | 38hrs | 35hrs |



## Code Snippet-----



<div className="DrinkTab">
          <Route path='/drinks' exact>
            <Link className="NewButton" to='/newDrink'>
              <button className="Button">New Party Drink</button>
            </Link>
            {drinks.map((drink, index) => {
              return (
                <Drinks key={index} drink={drink} />
              )
            })}
          </Route>
          <Route exact path='/drinks/:id'>
            <DirectPage drink={drinks} setToggleFetch={setToggleFetch} />
          </Route>
          <Route path='/newDrink'>
            <Suggestion drinks={drinks} setToggleFetch={setToggleFetch} />
          </Route>
        </div>
        
        

## Change Log-----
 August 26 final update on Read.me
 August 26 Added code snippet
 
