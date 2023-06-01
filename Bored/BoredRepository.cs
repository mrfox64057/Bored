using Bored.Models;
using Newtonsoft.Json.Linq;

namespace Bored
{
    public class BoredRepository : IBoredRepository

    {
        HttpClient client = new HttpClient();
        public DoThis GetIt()
        {
            var doThis = new DoThis();
            var url = "http://www.boredapi.com/api/activity/";           
            var randomToDo = client.GetStringAsync(url).Result;
            doThis.Activity = JObject.Parse(randomToDo).GetValue("activity").ToString();
            doThis.Link = JObject.Parse(randomToDo).GetValue("link").ToString();
            return doThis;
            //if null differrent link 
        }


       
    }
}
