using pocserver.DTO;
using pocserver.entities;
using AutoMapper;

namespace pocserver.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
        CreateMap<info, InfoDto>();
        }
    }
}