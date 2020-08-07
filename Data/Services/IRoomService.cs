using ReactRoom.Data.Models;
using System.Collections.Generic;

namespace ReactRoom.Data
{
    public interface IRoomService
    {
        List<Room> GetAllRooms();
        Room GetRoomById(int roomId);
        void UpdateRoom(int roomId, Room room);
        void DeleteRoom(int roomId);
        void AddRoom(Room room);
    }
}