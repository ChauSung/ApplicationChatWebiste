using AppWeb.Entities;

namespace AppWeb.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(DataUsers user);
    }
}
