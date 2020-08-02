using Microsoft.AspNetCore.Mvc;
using ReactRoom.Data;
using ReactRoom.Data.Models;

namespace ReactRoom.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        private IRoomService _service;
        public RoomController(IRoomService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetAllRooms()
        {
            var allRooms = _service.GetAllRooms();
            return Ok(allRooms);
        }

        [HttpPost("AddRoom")]
        public IActionResult AddRoom([FromBody]Room room)
        {
            if(room != null)
            {
                _service.AddRoom(room);
            }
            return Ok();
        }

        [HttpPut("UpdateRoom/{id}")]
        public IActionResult UpdateRoom(int id, [FromBody]Room room)
        {
            _service.updateRoom(id, room);
            return Ok(room);
        }
    }
}