export const formatDate = (dateStr: string, mode: string = "read"): string => {
  const date = new Date(dateStr);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  let dateString;

  if (mode !== "read") {
    dateString = `${year}-${month}-${day}`;
  } else {
    dateString = `${month}/${day}/${year}`;
  }
  return dateString;
};

export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, "");
  const match = digits.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const formatKebab = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatMinutes = (duration: number): string => {
  const hours = Math.floor(duration / 60);
  const remainingMinutes = duration % 60;

  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`;
  }
  return `${remainingMinutes}m`;
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};
