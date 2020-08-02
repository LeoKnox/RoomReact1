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
                Floor="Entry_floor",
                Wall="Entry_wall",
                Width=5,
                Length=5,
                DateCreated = new System.DateTime(2020, 07, 31),
                DateModified = new System.DateTime(2020, 07, 31)
            },
            new Room()
            {
                Id=2,
                Name="Room1",
                Floor="entry_floor",
                Wall="entry_wall",
                Width=7,
                Length=8,
                DateCreated = new System.DateTime(2020, 07, 31),
                DateModified = new System.DateTime(2020, 07, 31)
            }
        };
    }
}