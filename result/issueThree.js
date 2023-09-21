function isValidIPAddress(ipAddress) {
    const parts = ipAddress.split('.');
    if (parts.length !== 4) {
      return false;
    }
  
    for (let part of parts) {
      if (!/^\d+$/.test(part)) {
        return false;
      }
  
      const num = parseInt(part);
      if (num < 0 || num > 255) {
        return false;
      }
    }
  
    return true;
  }