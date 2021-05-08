using pocserver.entities;
using pocserver.Data;
using pocserver.DTO;
using pocserver.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace pocserver.Controllers
{
    public class InfoController : BaseApiControllers
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        
        public InfoController (DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        [HttpPost("add")]
        public async Task<ActionResult<InfoDto>> Add(InfoDto infoDto)
        {
            var row = new info
            {
                From = infoDto.From,
                To = infoDto.To
            };

            _context.Info.Add(row);
            await _context.SaveChangesAsync();

            return new InfoDto
            {
                From = row.From,
                To = row.To
            };
        }

              [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<InfoDto>>> GetInfo()
            {
            return await _context.Info
            .ProjectTo<InfoDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
            }
    }
}