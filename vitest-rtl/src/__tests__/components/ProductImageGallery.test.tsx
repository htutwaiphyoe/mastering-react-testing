import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if image urls is empty", () => {
    const imageUrls: Array<string> = [];
    const { container } = render(<ProductImageGallery imageUrls={imageUrls} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render urls if image urls is empty", () => {
    const imageUrls: Array<string> = ["a", "b"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
    imageUrls.forEach((imageUrl, index) => {
      expect(images[index]).toHaveAttribute("src", imageUrl);
    });
  });
});
