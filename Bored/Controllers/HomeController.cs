﻿using Bored.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Bored.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IBoredRepository _repo;
        public HomeController(ILogger<HomeController> logger, IBoredRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        public IActionResult Index()
        {
            var quote = _repo.GetIt();
            return View(quote);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}