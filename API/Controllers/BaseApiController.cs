
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] // this accepts the first part of the control and uses it for the route https://localhost:5001/api/users
public class BaseApiController : ControllerBase
{

}

