public class Product {
    private Integer Codigo;
    private String Description;
    private Float Value;

    public Product() {
    }
    
    public Product(Integer Codigo, String Description, Float Value) {
        this.Codigo = Codigo;
        this.Description = Description;
        this.Value = Value;
    }

    public Integer getCodigo() {
        return Codigo;
    }

    public String getDescription() {
        return Description;
    }

    public Float getValue() {
        return Value;
    }
}
