using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Helpers
{
    public class TaskResponse
    {
        public int Count { get; set; }

        public List<Models.Task> Array { get; set; }

        public TaskResponse(int count, List<Models.Task> array)
        {
            this.Array = array;
            this.Count = count;
        }
    }
}
