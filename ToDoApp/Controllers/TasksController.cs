﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Models;

namespace ToDoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Tasks 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetTasks(string? sortOrder, 
                                                                           string? filterTitle, 
                                                                           bool? filterCompleted = null, 
                                                                           int perPage = 8, 
                                                                           int pageIndex = 0)
        {
            IQueryable<Models.Task> tasksIQ = from t in _context.Tasks
                                             select t;

            // filtering
            if (!String.IsNullOrEmpty(filterTitle))
            {
                tasksIQ = tasksIQ.Where(t => t.Title.ToUpper().Contains(filterTitle.ToUpper()));
            }
            if (filterCompleted != null)
            {
                tasksIQ = tasksIQ.Where(t => t.IsComplete == filterCompleted);
            }

            // sorting
            switch (sortOrder)
            {
                case "title_desc":
                    tasksIQ = tasksIQ.OrderByDescending(t => t.Title);
                    break;
                case "title":
                    tasksIQ = tasksIQ.OrderBy(t => t.Title);
                    break;
                case "date_desc":
                    tasksIQ = tasksIQ.OrderByDescending(t => t.DueDate);
                    break;
                case "date":
                default:
                    tasksIQ = tasksIQ.OrderBy(t => t.DueDate);
                    break;
            }

            return await tasksIQ.Skip(pageIndex * perPage).Take((pageIndex + 1) * perPage).ToListAsync();
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> GetTaskById(int id)
        {
            ControllerContext.HttpContext
                  .Response
                  .Headers
                  .Add("Access-Control-Allow-Origin", "http://localhost:4200");
            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(int id, Models.Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Models.Task>> PostTask(Models.Task task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskById", new { id = task.Id }, task);
        }

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.Id == id);
        }
}
}
