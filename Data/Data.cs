using ReactRoom.Data.Models;
using System.Collections.Generic;

namespace ReactRoom.Data
{
    public static class Data
    {
        public static List<Room> Rooms => allRooms;

        static List<Room> allRooms = new List<Room>()
        {
            new Room()
            {
                Id=1,
                Name="Entry",
                Floor="Entry",
                Wall="Entry",
                Width=5,
                Length=5,
                DateCreated = new System.DateTime(2020, 07, 31),
                DateModified = new System.DateTime(2020, 07, 31)
            }
        };
    }
}