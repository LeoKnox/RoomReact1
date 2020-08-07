using ReactRoom.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace ReactRoom.Data
{
    public class RoomService : IRoomService
    {
        public void AddRoom(Room room)
        {
            Data.Rooms.Add(room);
        }

        public void DeleteRoom(int roomId)
        {
            var room = Data.Rooms.FirstOrDefault(n => n.Id == roomId);
            if (room != null)
            {
                Data.Rooms.Remove(room);
            }
        }

        public List<Room> GetAllRooms() => Data.Rooms.ToList();

        public Room GetRoomById(int roomId) => Data.Rooms.FirstOrDefault(n => n.Id == roomId);
        public void UpdateRoom(int roomId, Room room)
        {
            var oldRoom = Data.Rooms.FirstOrDefault(n => n.Id == roomId);
            if (oldRoom != null)
            {
                oldRoom.Name = room.Name;
                oldRoom.Floor = room.Floor;
                oldRoom.Wall = room.Wall;
                oldRoom.Width = room.Width;
                oldRoom.Length = room.Length;
            }
        }
    }
}